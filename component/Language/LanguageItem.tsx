import { iLanguageItemProps } from "@type/component/Language.d";

export default function LanguageItem({
    name,
    onSelect,
}: iLanguageItemProps) {
    return (
        <div
            className="px-4 pt-2 pb-2 first:pt-3 last:pb-3 flex items-center gap-2 text-sm cursor-pointer select-none hover:bg-gray-200"
            onClick={onSelect(name)}
        >
            <div className="flex-none w-4 h-4 grid place-items-center text-xs font-bold text-gray-500">
                {name[0]}
            </div>

            <span className="grow font-semibold text-gray-500">{name}</span>
        </div>
    );
}
