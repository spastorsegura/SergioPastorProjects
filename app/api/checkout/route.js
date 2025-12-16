import { NextResponse } from "next/server";
import MercadoPagoConfig, { Preference } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN,
});

export async function POST(req) {
  try {
    const { items } = await req.json();

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: "No hay items en el carrito" },
        { status: 400 }
      );
    }

    // Usar una URL base segura (HTTPS) para el despliegue o ngrok para pruebas locales
    const BASE_URL =
      process.env.NEXT_PUBLIC_BASE_URL || "https://preearthquake-velva-panickingly.ngrok-free.dev/"; // Reemplaza con tu URL real/ngrok

    const body = {
      items: items.map((i) => ({
        title: i.title,
        quantity: Number(i.quantity || 1),
        unit_price: Number(i.price),
        currency_id: "PEN",
      })),
      back_urls: {
        success: `${BASE_URL}/checkout/success`,
        failure: `${BASE_URL}/checkout/failure`,
        pending: `${BASE_URL}/checkout/pending`,
      },
      auto_return: "approved",
    };

    const result = await new Preference(client).create({ body });

    return NextResponse.json({ id: result.id });
  } catch (error) {
    console.error("ERROR MERCADO PAGO:", error.response?.body || error.message);
    return NextResponse.json(
      { error: "Error al crear la preferencia :(" },
      { status: 500 }
    );
  }
}
