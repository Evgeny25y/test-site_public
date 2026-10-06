import { TelegramButton } from "@/components/contact/TelegramButton";
import { env } from "@/lib/env";

export function FloatingContact() {
  if (!env.telegramUsername && !env.isDev) return null;

  return (
    <>
      <div className="fixed bottom-6 right-6 z-30 hidden lg:block">
        <TelegramButton variant="primary" className="shadow-[0_10px_30px_-12px_rgba(24,38,56,0.55)]">
          Написать Евгению
        </TelegramButton>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-bg/95 px-5 py-3 backdrop-blur-md sm:px-8 lg:hidden">
        <TelegramButton variant="primary" className="w-full" />
      </div>
    </>
  );
}
