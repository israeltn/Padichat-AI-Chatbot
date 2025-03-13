import Link from 'next/link'
export const PrimaryButton = ({ href, children }: {
    href: string
    children: React.ReactNode
}) => {
    return (
        <Link href={href} className="bg-coral rounded-[6px] text-white py-4 px-8">{children}</Link>
    )
}

export const SecondaryButton = ({ href, children }: {
    href: string
    children: React.ReactNode
}) => {
    return (
        <Link href={href} className="bg-white rounded-[6px] text-black py-4 px-8">{children}</Link>
    )
}
