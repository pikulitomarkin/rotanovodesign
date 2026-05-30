import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { token } = await req.json();
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    
    if (!secretKey) {
      console.error("RECAPTCHA_SECRET_KEY is missing");
      // Fallback para permitir o redirecionamento se a chave não estiver configurada no servidor (em desenvolvimento)
      return NextResponse.json({ success: true, warning: "Missing secret key" }); 
    }

    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`, {
      method: 'POST',
    });
    const data = await response.json();

    if (data.success && data.score >= 0.5) {
      return NextResponse.json({ success: true, score: data.score });
    } else {
      return NextResponse.json({ success: false, score: data.score || 0 });
    }
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message });
  }
}
