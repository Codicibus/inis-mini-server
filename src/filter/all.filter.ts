import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class AllExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    const exceptionRes: any = exception.getResponse();
    const { message } = exceptionRes;

    response.status(status).json({
      code: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message,
    });
  }
}
