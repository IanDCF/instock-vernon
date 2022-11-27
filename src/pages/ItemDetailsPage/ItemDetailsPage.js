import "./ItemDetailsPage.scss";
import ArrowBack from "../../assets/icons/arrow_back-24px.svg";
import EditButton from "../../components/Buttons/EditButton/EditButton";
import { Link, useParams } from "react-router-dom";
import InventoryTagInStock from "../../components/Buttons/InventoryTag/InventoryTagInStock"
import InventoryTagOutOfStock from '../../components/Buttons/InventoryTag/InventoryTagOutOfStock'
import { useEffect, useState } from "react";
import { getInventoryItem } from "../../utils/utils";
const ItemDetailsPage = () => {
  const { itemId } = useParams()
  const [inventoryItem, setInventoryItem] = useState()
  useEffect(() => {
    const fetchInventoryItem = async () => {
      const inventoryItemData = await getInventoryItem(itemId)
      setInventoryItem(inventoryItemData)
    }
    fetchInventoryItem()
  }, [itemId])
  return <section className="item-details">
    { inventoryItem && (
      <>
        <article className="item-details__title-wrapper">
          <div className="item-details__title">
            <section className="item-details__back-title-wrapper">
              <Link to={ '/inventory' }>
                <img
                  className="item-details__back-arrow"
                  src={ ArrowBack }
                  alt="back arrow"
                />
              </Link>
              <h1 className="item-details__title-value">{ inventoryItem.item_name }</h1>
            </section>
            <Link to={ `/inventory/${inventoryItem.id}/edit` }>
              <EditButton />
            </Link>
          </div>
        </article>
        <article className="item-details__info-wrapper">
          <section className="item-details__info-item">
            <div>
              <h5 className="item-details__label">ITEM DESCRIPTION:</h5>
              <p className="item-details__description">{ inventoryItem.description }</p>
            </div>
            <div>
              <h5 className="item-details__label">CATEGORY:</h5>
              <p className="item-details__description">{ inventoryItem.category }</p>

            </div>
          </section>
          <section className="item-details__info-item">
            <article className="item-details__status-quantity">
              <div className="item-details__item-wrapper item-details__item-wrapper--status">
                <h5 className="item-details__label">STATUS:</h5>
                { inventoryItem.satus === 'In Stock' ? <InventoryTagInStock /> : <InventoryTagOutOfStock /> }
              </div>
              <div>
                <h5 className="item-details__label">QUANTITY</h5>
                <p className="item-details__description">{ inventoryItem.quantity }</p>
              </div>
            </article>
            <div>
              <h5 className="item-details__label">WAREHOUSE:</h5>
              <p className="item-details__description">{ inventoryItem.warehouse_name }</p>
            </div>
          </section>
        </article>
      </>

    ) }

  </section>;
};

export default ItemDetailsPage;
