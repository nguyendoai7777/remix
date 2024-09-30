import { Form, useNavigate } from '@remix-run/react';
import { ActionFunctionArgs, json, redirect } from '@remix-run/node';

export const action = async ({ request, }: ActionFunctionArgs) => {
  const form = await request.formData();
  const un = (form.get('username')) as string;
  const pw = (form.get('password')) as string;
  /**
   * auth business here
   *
   * */
  if (un == '123123' && pw == '123123') {
    return redirect('/', {
      headers: {
        'Set-Cookie': un + pw
      }
    });
  }
  return json({
    code: 401,
    title: 'Login failed.',
    message: 'Please try again.'
  });
};

export default function LoginPage() {
  const navigate = useNavigate();
  return <div className="flex justify-center h-[100vh] items-center">
    <Form method="post" action="/login" className="flex flex-col items-center w-fit gap-4">
      <div className="py-4 text-2xl font-bold">Login</div>
      <input name="username" className="focus:outline-1  px-4 py-2 rounded" placeholder="Username"/>
      <input name="password" className="focus:outline-1  px-4 py-2 rounded" placeholder="Password"/>
      <button type="submit" className="duration-150 hover:bg-teal-700 rounded border border-teal-600 py-2 flex justify-center w-full">Login</button>
    </Form>
  </div>;
}