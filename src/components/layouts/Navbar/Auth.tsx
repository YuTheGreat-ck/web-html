import { Button } from "antd";
import Link from "next/link";

interface AuthProps {
  loginHref?: string;
  quoteHref?: string;
}

export default function Auth({ 
  loginHref = "/login", 
  quoteHref = "/quote" 
}: AuthProps) {
  return (
    <div className="hidden lg:flex items-center justify-end gap-x-4">
      <Link href={loginHref}>
        <Button 
          type="text" 
          className="text-lg font-medium tracking-wide hover:text-[#4B73FF] transition-colors"
        >
          登录
        </Button>
      </Link>
      
      <Link href={quoteHref}>
        <Button 
          className="h-auto py-2 px-8 rounded-2xl bg-black text-white hover:bg-neutral-800 transition-all text-lg font-medium"
        >
          获取报价
        </Button>
      </Link>
    </div>
  );
}
