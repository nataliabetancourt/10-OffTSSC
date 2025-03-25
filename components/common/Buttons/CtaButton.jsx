import Link from "next/link"

export function CtaButton({ children, fullwidth, onClick, className, variant = 'normal', href = '#' }) {

    if (variant === 'normal') {
        return (
            <Link href={href} onClick={onClick} className={`${fullwidth && 'w-full'} ${className} cursor-pointer px-8 py-2 grid place-items-center rounded-md bg-red-200 text-white transition-colors hover:bg-red-100 hover:shadow-xl hover:shadow-red-200/20 min-h-[40px]`}>
                {
                    children
                }
            </Link>
        )
    }

    if (variant === 'banner') {
        return (
            <Link href={href} onClick={onClick} className={`${fullwidth && 'w-full'} ${className} px-8 py-2 grid place-items-center rounded-md bg-red-200 text-white transition-colors hover:bg-red-100 hover:shadow-xl hover:shadow-red-200/20 min-h-[40px] max-w-[382px]`}>
                {
                    children
                }
            </Link>
        )
    }
}

export function SecundaryButton({ children, fullwidth, onClick, href = '#', className }) {
    return (
        <Link href={href} onClick={onClick} className={`${fullwidth && 'w-full'} ${className} cursor-pointer grid place-items-center px-8 py-2 rounded-md border-2 text-red-200 border-red-200 transition-all hover:scale-105 min-h-[40px] lg:px-4`}>
            {
                children
            }
        </Link>
    )
}