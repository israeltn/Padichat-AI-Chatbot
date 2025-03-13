import Link from 'next/link'

export const PrimaryButton = ({ href, children }: {
    href: string
    children: React.ReactNode
}) => {
    return (
        <Link href={href} className="bg-primary rounded-[6px] text-white font-semibold text-sm py-1 px-2 md:py-2 md:px-4">{children}</Link>
    )
}

export const SecondaryButton = ({ href, children }: {
    href: string
    children: React.ReactNode
}) => {
    return (
        <Link href={href} className="bg-white rounded-[6px] text-black font-semibold text-sm py-1 px-2 md:py-2 md:px-4">{children}</Link>
    )
}
