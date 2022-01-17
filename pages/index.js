import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import client from "../client";

const Home = (props) => {
  const {products: {items: itemsProduct}, blogs: {items: itemsBlog}} = props;
  return (
    <div>
      <div style={{margin: '30px auto', width: '640px', borderRadius: '5px', backgroundColor: '#999', padding: '20px 30px'}}>
        <div style={{fontWeight: 'bold', color: 'white', fontSize: '18px'}}>List Users</div>
        {itemsProduct.map((el, _i) => (
          <div key={_i} style={{backgroundColor: 'white', borderRadius: '5px', margin: '10px 0', padding: '5px 10px'}}>
            {el.fields.name}
          </div>
        ))}
      </div>

      <div style={{margin: '30px auto', width: '640px', borderRadius: '5px', backgroundColor: '#999', padding: '20px 30px'}}>
        <div style={{fontWeight: 'bold', color: 'white', fontSize: '18px'}}>List Content</div>
        {itemsBlog.map((el, _i) => (
          <div key={_i}>
            <div style={{backgroundColor: 'white', borderRadius: '5px', margin: '10px 0', padding: '5px 10px'}}>
              {el.fields.name}
            </div>
            <div style={{backgroundColor: 'white', borderRadius: '5px', padding: '5px 10px', marginBottom: '10px'}}>
              {documentToReactComponents(el.fields.description)}
            </div>
            <div style={{fontSize: '10px', textAlign: 'right'}}>
              {new Date(el.fields.date).toLocaleString()}
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async (props) => {
  const {locale} = props;
  const lang = locale === 'en' ? 'en-US': 'ru';
  const products = await client.getEntries({
    content_type: 'product',
    locale: lang
  })

  const blogs = await client.getEntries({
    content_type: 'blog',
    locale: lang
  })

  return {
    props: {
      products,
      blogs
    }
  }
}

export default Home;
