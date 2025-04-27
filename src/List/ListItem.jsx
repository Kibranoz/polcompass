import "./ListItem.css";

export default function ListItem(item) {
    return (
        <div className="listItem">
            <div className="listItemTitle">{item.item.name}</div>
            <div className="listItemDescription">{item.item.description}</div>
            <div className="listItemLink"><a href={"/"+item.item.id}>See political compass</a></div>
        </div>
    )
}