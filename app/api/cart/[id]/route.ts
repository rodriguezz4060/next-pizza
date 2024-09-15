import { updateCartTotalAmount } from './../../../../shared/lib/update-cart-total-amount'
import { prisma } from '@/prisma/prisma-client'
import { NextRequest, NextResponse } from 'next/server'

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id)
    const data = (await req.json()) as { quantity: number }
    const token = req.cookies.get('cartToken')?.value

    if (!token) {
      return NextResponse.json({ error: 'Токен не найден' })
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id,
      },
    })

    if (!cartItem) {
      return NextResponse.json({ error: 'Товар не найден' })
    }

    await prisma.cartItem.update({
      where: {
        id,
      },
      data: {
        quantity: data.quantity,
      },
    })

    const updatedUserCart = await updateCartTotalAmount(token)

    return NextResponse.json(updatedUserCart)
  } catch (error) {
    console.log('[CART_GET] Server Error', error)
    return NextResponse.json({ message: 'Не удалось обновить корзину' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id)
    const token = req.cookies.get('cartToken')?.value

    if (!token) {
      return NextResponse.json({ error: 'Токен не найден' })
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id: Number(params.id),
      },
    })

    if (!cartItem) {
      return NextResponse.json({ error: 'Товар не найден' })
    }

    await prisma.cartItem.delete({
      where: {
        id: Number(params.id),
      },
    })

    const updateUserCart = await updateCartTotalAmount(token)
    return NextResponse.json(updateUserCart)
  } catch (error) {
    console.log('[CART_DELETE] Server Error', error)
    return NextResponse.json({ message: 'Не удалось удалить товар из корзины' }, { status: 500 })
  }
}
