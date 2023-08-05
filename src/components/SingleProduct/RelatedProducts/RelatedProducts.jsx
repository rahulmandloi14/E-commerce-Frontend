import Products from "../../Products/Products";
import useFetch from "../../../hooks/useFetch";

const RelatedProducts = ({productId, categoryId}) => {
    const {data} = useFetch(`/api/products?populate=*&filters[id][$ne]=${productId}&filters
    [categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`)
    // mutliple filter bhi use kr skte h or isliye kiya ki related product me wo jo
    //  dikh rha h wo product na dikhe isliye [$ne] iska mtlb not equal or uske
    //  equal me productId likh di 
    
    return (<div className="related-products">
        <Products heading="Related Products"  products={data} />
    </div>
    );
};

export default RelatedProducts;
