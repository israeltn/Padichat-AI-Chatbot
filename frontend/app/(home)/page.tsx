import Image from "next/image";
import { PrimaryButton } from "@/components/ui/app-button"
import Link from "next/link";
import styles from './page.module.css'
// import styles from './page.module.css'
export default function Home() {
    return (
        <div className="flex gap-0 flex-col">
            <div className="bg-accent lg:bg-[url(/images/hero.png)] bg-no-repeat bg-bottom md:bg-right p-0 top-[-90px] relative flex items-center justify-center">
                <div className="app-container w-full  items-start">
                    <div className="flex flex-col items-start pt-24 max-w-[521px] gap-8">
                        <div className="rounded-3xl flex  items-center w-auto bg-accent-foreground py-[6px] px-3">
                            <Image src="/icons/mynaui-lock-octagon.svg" alt="mynaui-lock-octagon" width={24} height={24} />
                            <span className="text-[11px] w-full">Padi ensures your conversations remain 100% private and encrypted</span>
                        </div>
                        <div className="text-[38px] md:text-[54px] md:font-extrabold text-black w-f">
                            Your <span className="gradient-text line italic ">Safe Space</span> for Counseling & Support
                        </div>
                        <div className="text-gray-500 text-[16px] md:text-lg max-w-[444px]">
                            Talk to AI, connect with real counselors, or speak with medical professionals for guidance—all in a safe and confidential space.
                        </div>
                        <div className="flex gap-4 items-center mb-4 md:mb-[126px]">
                            <PrimaryButton href="/register">
                                <span className="flex gap-2">Get Started <Image src="/icons/icon-arrow-right-circle.svg" alt="arrow-right" width={21} height={21} /></span>
                            </PrimaryButton>

                            <Link href="#about">Learn More</Link>
                        </div>
                    </div>


                </div>

            </div>
            <div className={`lg:hidden ${styles.heroContainer}`}>
                <Image src="/images/hero.png" alt="hero" fill className={styles.img} />

            </div>
            <div className="app-container w-full flex flex-col items-center gap-8" id="partners">
                <div className="text-sm font-semibold md:text-lg text-zinc-600">Our Notable Partners: Driving Impact Together</div>
                <div className="flex w-full overflow-scroll justify-between items-center">
                    {[...Array(5)].map((_, i) => (

                        <Image key={i} src="/images/partners.png" alt={`partner${i + 1}`} width={100} height={100} />
                    ))}

                </div>
            </div>
            <div className="app-container gap-4 mt-16 items-center">
                <div className="text-zinc-600 text-sm md:text-lg font-semibold"> Why Choose PadiChat?</div>
                <div className=" font-bold text-gray-900 text-3xl items-center  text-center">Empowering You with the Right Support, Anytime
                </div>
                <div className="flex flex-col md:flex-row py-[100px] justify-between">
                    <div className={`${styles.empContainer} flex-1/2`}>
                        <Image src="/images/frame-29.png" alt="feature1" fill className={styles.img} />
                    </div>
                    <div className="text-lg flex-1/2 flex flex-col font-semibold text-zinc-500">
                        <div className="text-primary text-xs">AI & HUMAN SUPPORT</div>
                        <div className="text-gray-900 md:text-2xl text-lg font-extrabold">Get Help, Your Way</div>
                        <div className="text-zinc-500">PadiChat gives you 24/7 instant AI companion; Anna for quick guidance and reassurance, while also allowing you to book appointments with professional counselors and doctors at times that work for you—whether it’s a quick chat or a longer session, you stay in control of when and how you get support.</div>
                        <div className="text-black flex gap-1 items-center font-bold">Your Safe Space Starts Here <span className="items-center flex"><Image src={`/icons/arrow-1.svg`} alt="arrow" width={50} height={0} /></span>  </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="text-lg flex-1/2 flex flex-col font-semibold text-zinc-500">
                        <div className="text-primary text-xs">100% CONFIDENTIAL</div>
                        <div className="text-gray-900 md:text-2xl text-lg font-extrabold">Your Privacy is Our Priority</div>
                        <div className="text-zinc-500">At Padi, confidentiality comes first. Every conversation, whether with our AI, a counselor, or a doctor, is fully private and secure. We use end-to-end encryption to ensure your data stays safe. No judgment, no pressure—just support, whenever you need it.</div>
                        <div className="text-black flex gap-1 items-center font-bold">Your Safe Space Starts Here <span className="items-center flex"><Image src={`/icons/arrow-1.svg`} alt="arrow" width={50} height={0} /></span>  </div>
                    </div>
                    <div className={`${styles.empContainer} flex-1/2`}>
                        <Image src="/images/frame-30.png" alt="feature1" fill className={styles.img} />
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

