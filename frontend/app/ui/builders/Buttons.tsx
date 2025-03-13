import Link from 'next/link'
export const PrimaryButton = ({ href, children }: {
    href: string
    children: React.ReactNode
}) => {
    return (
        <Link href={href} className="bg-coral rounded-lg text-white py-4 px-8">{children}</Link>
    )
}
