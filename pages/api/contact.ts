import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

type SheetForm = {
  name: string;
  email: string;
  reason: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST request are allowed" });
  }

  const body = req.body as SheetForm;

  try {
    //Prepare Auth
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key:
          "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCvRJKujcYPoo+t\nUjryIF3QIJ/gNtjkcNGVFsEgMEr6dJsicAw0GPUwcrPMBzJCa0z7o2IBGOSwt/b7\nqG3GkoKB8h0JdKLA2MJhLoqOnFWDJYWHEEhfQchjYZb+yzLGv/QWkVMikqBWmtmr\nVp/9xGl4afUdco+ayJMA/Qx4wo1K5drrnIjzn8O/NnyXV/kQ2JSpT7ImJAhq9Y8Z\nldgt4cOIRpmMBn2CBQXpxhQ5462vAGjWYVKoSBLy6P5g+u1tHbqIkEFQvO1T2FWq\ngkCixpht9P0Eey+1wrXbL5dfqOkA8mbmVCRlUKiCyzWFagD6hVtq7/rAIYUEeXIO\nJap0HHP9AgMBAAECggEALNaAKAPBDbLqys5kohjBp0MRY4zkg9yQ4XFGyvNP2y8F\nmRPNK27PGyvc729P3koREbdElT9HEiaeGteF7e0BUjkcUJT0Jh3N7Iq5i65W+gwZ\nUupJeYUcvL/0nw5g2RO2YCehexDD0CQhV4H7wDIFQXbp7DSopFJ3uSMDk8lB2Ez0\nNGYJLjNCpCFtuuQEhHtxTUl0lDNzDzN+oPY/qxWhWWfDtQl4Xepmv3L76o/d5yr1\nPzHtQnJN1XaoYRK1EdqtA/KFVXBWvFNKhgNDEnpz3fOjNC+t5PGSeKv6KAMGBxY6\nP+LC4YwZBaKIIdp/cxcJHddKVwQvlt2e6j2pCGS1yQKBgQDvvBZl12Pc0F3Wm/tS\nl60tCq4Iiu6/QI3L7O+LL8BS9VpbhCEssUUwktwZcwmuEvHloq0Tw7VioprvFnc9\n1AUnekto2xxH193UViJH7IJaPciLJh0K/nMdbTMgtHKYZfb1t9tI6O5HZWAxjeF6\n/XMTG49E2t/PHIQjeyqJ8xpFGwKBgQC7KMV6uF42xMOMek/sy3CD+nKbA62d5g2G\ndTmbPcCBakJ+wlfAKpSU2HXSoFDgM2PMfaYw9jsKV97vMyLg2OTMnD9EoCwE58b5\ngdlnkaDUL0PZjDzTQv/2Ff/XMxaV1VYemuWnDCRouRO1/183VDgtTRTKUh3ZhyJi\nZTnslqn0xwKBgHKAvZnq5JGlHAzS95kdROOMhE8kPKAwbwmFo2wxZIS7F2s6krXL\n/aYTnviwz2DLP6pUpqIYCdyQmbu0WUO4rrWKXdY5QSq3WgZ/FWSQ/Dmp5M1BaQHF\nQqo9a/wk888CdJAsPpp2VsjXDLjecWHTCFGKCkXy3I8JqbtgqpK1AEkdAoGBAJF1\ni53oYtjgLjck7K9WIfmBEcdmoW4B2Wsx+nasFMzAQDPyaW7h6R6R6Wiszo6hgiPx\nV9Pf210blBmGPcpQ5+oaWZXFgtDBLsTGZah3525h2bLfqnprLTIeQPwJKbmD1+3r\nZydgaX+2sBoYAvGmlA6pRMpF7gsdWtzsXYuCQU8LAoGAIWyS4HDujUTYOU/eqcku\n1ZZAr8gqdBp6iQk/HxAUy3sSSGTqnZi/Ppewjzr2w25DAbrvf8jqGqsM/p3hJyZo\nD+Bomt/jw9M9W3vSQAsNekoABuhvEuvvMcsoYEe/6Ls37CzU8poFdbBQEz6MYYlt\nhjhYok2KDPl6Zil31KcsFR4=\n-----END PRIVATE KEY-----\n"?.replace(
            /\\n/g,
            "\n"
          ),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:D1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[body.name, body.reason, body.email, body.message]],
      },
    });

    return res.status(200).json({
      data: response.data,
    });
  } catch (error: any) {
    return res
      .status(500)
      .send({ message: error.message ?? "Something went wrong" });
  }
}
