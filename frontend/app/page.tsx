import Image from "next/image";
// import { Button } from "@/components/ui/button"
// import styles from './page.module.css'
export default function Home() {
    return (
        <div className="flex flex-col">
            <div className="bg-accent bg-[url(/images/hero.png)] bg-no-repeat bg-bottom md:bg-right p-0 top-[-90px] relative flex items-center justify-center">
                <div className="app-container w-full  items-start">
                    <div className="flex flex-col items-start pt-24 max-w-[103px] gap-8">
                        <div className="rounded-l-3xl bg-secondary py-[6px] px-3">
                            <Image src="/icons/mynaui-lock-octagon.svg" alt="mynaui-lock-octagon" width={24} height={24} />
                        </div>
                    </div>
                  
                  
                </div>
               
            </div>

        </div>
    );
}

