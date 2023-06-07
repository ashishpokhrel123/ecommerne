// import { Injectable } from '@nestjs/common';
// import { MailerService } from '@nestjs/mailer';



// @Injectable()
// export class ResetPasswordService {
//   constructor(private readonly mailerService: MailerService) {}

//   async requestResetPassword(email: string, resetToken: string): Promise<void> {
//     try {
//       await this.mailerService.sendMail({
//         to: email,
//         subject: 'Password Reset Request',
//         html: `<p>Click on the following link to reset your password: 
//           <a href="https://your-website.com/reset-password?token=${resetToken}">Reset Password</a></p>`,
//       });

//       console.log('Password reset email sent successfully');
//     } catch (error) {
//       console.error('Error sending password reset email:', error);
//       throw new Error('Failed to send password reset email');
//     }
//   }
// }
