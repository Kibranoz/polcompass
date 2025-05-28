import "./ListItem.css";
import { useTranslation } from 'react-i18next'


export default function ListItem(item) {

    const {t, i18n} = useTranslation()
    return (
        <div className="listItem">
            <div className="listItemTitle">{item.item.name}</div>
            <div className="listItemDescription">{item.item.description}</div>
            <div className="listItemLink"><a href={"/"+item.item.id}>{t("list.see_compass")}</a></div>
        </div>
    )
}