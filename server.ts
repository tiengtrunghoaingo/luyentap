import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not configured");
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", time: new Date().toISOString() });
  });

  // AI Grammar Analyzer & Tutor endpoint
  app.post("/api/ai/analyze-grammar", async (req, res) => {
    try {
      const { text, queryType = "analyze" } = req.body;
      if (!text || typeof text !== "string") {
        return res.status(400).json({ error: "Vui lòng cung cấp văn bản tiếng Trung cần phân tích." });
      }

      if (!process.env.GEMINI_API_KEY) {
        // Fallback local response if no key is configured
        return res.json({
          success: true,
          isMock: true,
          analysis: {
            pinyin: "Phân tích tự động",
            vietnameseMeaning: "Ý nghĩa câu",
            grammarBreakdown: [
              { component: "Cấu trúc", detail: "Phân tích câu chuẩn theo cấu trúc HSK 1" }
            ],
            feedback: "Gợi ý: Cung cấp khóa API Gemini trong mục Cài đặt để kích hoạt phân tích ngữ pháp AI thông minh chi tiết từng thành phần câu.",
            correctedSentence: text,
            relatedGrammarPoints: ["Cấu trúc câu HSK 1"]
          }
        });
      }

      const client = getGeminiClient();
      const prompt = `Bạn là chuyên gia giảng dạy tiếng Trung và ngữ pháp HSK 1 cho người Việt Nam.
Hãy phân tích câu/yêu cầu sau của người học: "${text}"

Hãy trả về kết quả dưới dạng JSON thuần túy (không bọc code block markdown nếu có thể, hoặc bọc \`\`\`json \`\`\`) với cấu trúc:
{
  "pinyin": "Phiên âm pinyin chuẩn có dấu thanh",
  "vietnameseMeaning": "Nghĩa tiếng Việt chuẩn xác và tự nhiên",
  "grammarStructure": "Cấu trúc ngữ pháp tổng quát (ví dụ: S + 很 + Adj hoặc S + 在 + Địa điểm + V)",
  "components": [
    {"part": "Thành phần (Chủ ngữ/Vị ngữ/Tân ngữ/Trợ từ/Phó từ/Lượng từ)", "hanzi": "Chữ Hán tương ứng", "pinyin": "pinyin", "explanation": "Giải thích vai trò ngữ pháp"}
  ],
  "isCorrect": true/false (nếu có lỗi sai ngữ pháp HSK 1),
  "correctedSentence": "Câu đã sửa nếu có lỗi, hoặc câu gốc nếu đã chuẩn",
  "correctedPinyin": "Pinyin của câu chuẩn",
  "feedback": "Nhận xét chi tiết bằng tiếng Việt về câu, chỉ ra điểm đúng/sai, lưu ý ngữ pháp quan trọng của HSK 1",
  "examples": [
    {"hanzi": "Ví dụ tương tự 1", "pinyin": "pinyin", "meaning": "nghĩa"}
  ],
  "relatedHsk1Point": "Tên điểm ngữ pháp HSK 1 liên quan"
}`;

      const response = await client.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.3,
        }
      });

      const responseText = response.text || "{}";
      try {
        const parsed = JSON.parse(responseText);
        return res.json({ success: true, analysis: parsed });
      } catch (parseErr) {
        return res.json({ success: true, rawText: responseText });
      }
    } catch (err: any) {
      console.error("AI analysis error:", err);
      return res.status(500).json({ error: err.message || "Lỗi khi xử lý với AI" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`HSK 1 App running at http://localhost:${PORT}`);
  });
}

startServer();
