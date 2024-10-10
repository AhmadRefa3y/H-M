import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    const sideLists = [
        {
            name: 'البنات 2-8 سنوات',
            links: [
                { name: 'اظهار الكل', link: './kids/view-all' },
                { name: 'وصل حديثاً', link: './kids/view-all' },
                {
                    name: 'الملابس',
                    link: './kids/view-all',
                },
                { name: 'الأحذية', link: './kids/view-all' },
                { name: 'الإكسسوارات', link: './kids/view-all' },
                { name: 'ملابس الخروج', link: './kids/view-all' },
                { name: 'الملابس الرياضية', link: './kids/view-all' },
            ],
        },
        {
            name: 'الأولاد 2-8 سنوات',
            links: [
                { name: 'اظهار الكل', link: './kids/view-all' },
                { name: 'وصل حديثاً', link: './kids/view-all' },
                {
                    name: 'الملابس',
                    link: './kids/view-all',
                },
                { name: 'الأحذية', link: './kids/view-all' },
                { name: 'الإكسسوارات', link: './kids/view-all' },
                { name: 'ملابس الخروج', link: './kids/view-all' },
                { name: 'الملابس الرياضية', link: './kids/view-all' },
            ],
        },
        {
            name: 'البنات 9-14 سنوات',
            links: [
                { name: 'اظهار الكل', link: './kids/view-all' },
                { name: 'وصل حديثاً', link: './kids/view-all' },
                {
                    name: 'الملابس',
                    link: './kids/view-all',
                },
                { name: 'الأحذية', link: './kids/view-all' },
                { name: 'الإكسسوارات', link: './kids/view-all' },
                { name: 'ملابس الخروج', link: './kids/view-all' },
                { name: 'الملابس الرياضية', link: './kids/view-all' },
            ],
        },
        {
            name: 'الاولاد 9-14 سنوات',
            links: [
                { name: 'اظهار الكل', link: './kids/view-all' },
                { name: 'وصل حديثاً', link: './kids/view-all' },
                {
                    name: 'الملابس',
                    link: './kids/view-all',
                },
                { name: 'الأحذية', link: './kids/view-all' },
                { name: 'الإكسسوارات', link: './kids/view-all' },
                { name: 'ملابس الخروج', link: './kids/view-all' },
                { name: 'الملابس الرياضية', link: './kids/view-all' },
            ],
        },
        {
            name: 'تسوق حسب المنتج',
            links: [
                { name: 'اظهار الكل', link: './kids/view-all' },
                { name: 'وصل حديثاً', link: './kids/view-all' },
                {
                    name: 'الملابس',
                    link: './kids/view-all',
                },
                { name: 'الأحذية', link: './kids/view-all' },
                { name: 'الإكسسوارات', link: './kids/view-all' },
                { name: 'ملابس الخروج', link: './kids/view-all' },
                { name: 'الملابس الرياضية', link: './kids/view-all' },
            ],
        },
    ]
    const LinkLi = ({ href, text }: { href: string; text: string }) => {
        return (
            <Link
                to={href}
                className="text-sm border-b-2 border-transparent hover:border-red-600  hover:text-red-600 w-fit duration-75"
            >
                {text}
            </Link>
        )
    }
    return (
        <aside className="w-[235px] hidden xl:flex flex-col gap-4">
            {sideLists.map((list, index) => (
                <div className="flex flex-col gap-4 " key={index}>
                    <h3 className="font-bold">{list.name}</h3>
                    <ul className="flex flex-col gap-2">
                        {list.links.map((link, index) => (
                            <LinkLi href="#" text={link.name} key={index} />
                        ))}
                    </ul>
                </div>
            ))}
        </aside>
    )
}

export default SideBar
