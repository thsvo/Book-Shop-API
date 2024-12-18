import { Request, Response } from 'express'
import { bookService } from './book.service'

const createBook = async (req: Request, res: Response) => {
    try {
        const jload = req.body

        const result = await bookService.bookServiceCalculate(jload)
        res.json({
            success: true,
            message: 'User created successfully',
            data: result,
        })
    } catch (error) {
        res.json({
            success: false,
            massage: 'validation error',
            error,
        })
    }
}

const totalrevenuecalculate = async (req: Request, res: Response) => {
    try {
        const result = await bookService.totalCalRevenue()

        res.status(200).json({
            message: 'Revenue calculated successfully',
            status: true,
            data: { totalRevenue: result },
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error calculating revenue',
            status: false,
            error,
        })
    }
}

export const orderController = {
    totalrevenuecalculate,
    createBook,
}
