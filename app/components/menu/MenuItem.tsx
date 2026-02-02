import type { MenuItem as MenuItemType } from '@/types';

interface MenuItemProps {
    item: MenuItemType;
}

export default function MenuItem({ item }: MenuItemProps) {
    return (
        <div className="group">
            <div className="flex items-baseline justify-between gap-4">
                <div className="font-inter text-base font-medium text-white/90 transition group-hover:text-white">{item.name}</div>
                <div className="font-inter text-sm font-normal text-white/50">₱{item.price}</div>
            </div>
            <div className="mt-1 font-inter text-sm font-normal leading-relaxed text-white/60">{item.description}</div>
        </div>
    );
}
