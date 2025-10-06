import { buttonVariants } from "@/components/ui/button";
import { Link } from "lucide-react";

const projectList = [
  {
    title: "Healthy",
    href: "https://muhammadhasan-8oy-imtihon.netlify.app/",
    description:
      "Sog‘lom turmush tarzini targ‘ib qiluvchi zamonaviy veb-sayt. Foydalanuvchilar uchun qulay interfeys va silliq animatsiyalar bilan yaratilgan.",
  },
  {
    title: "Messenger",
    href: "https://muhammadhasan-7oy.netlify.app/",
    description:
      "Real vaqtda xabar almashish imkonini beruvchi messenger ilovasi. React va Firebase texnologiyalaridan foydalanilgan.",
  },
  {
    title: "Marja academy",
    href: "https://marjagroup-academy.netlify.app/",
    description:
      "Uzum bilan ishlaydiganlar uchun ishlab chiqilgan veb-sayt. Kurslar, ustozlar va ishlash jadvalini ko‘rsatadigan to‘liq funksional loyiha.",
  },
  {
    title: "Find Countries",
    href: "https://muhammadhasan-exam5.netlify.app/",
    description:
      "Dunyo davlatlari haqidagi ma’lumotlarni izlash imkonini beruvchi loyiha. REST API bilan ishlovchi interaktiv veb-ilova.",
  },
  {
    title: "Games For Fun",
    href: "https://muhammadhasan-5oy-6dars.netlify.app/",
    description:
      "Foydalanuvchilar uchun turli mini o‘yinlar to‘plami. HTML, CSS va JavaScript asosida yaratilgan qiziqarli loyiha.",
  },
  {
    title: "Yaqin Kunlarda....",
    href: "https://",
    description:
      "Hozircha sir tutilayotgan yangi loyiha. Tez orada taqdim etiladi 😉",
  },
];

export default function page() {
  return (
    <div className="py-10">
      <div className="container max-w-screen-lg mx-auto px-5">
        <ul className="flex flex-col gap-10">
          {projectList.map(({ description, href, title }) => {
            return (
              <li key={title}>
                <h3 className="font-medium text-xl mb-3">{title}</h3>
                <p className="mb-4">{description}</p>
                <a
                  className={buttonVariants({ variant: "secondary" })}
                  href={href}
                  target="_blank"
                >
                  <Link />
                  Ko'rish
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
