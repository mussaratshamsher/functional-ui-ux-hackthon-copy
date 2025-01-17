
const product= {   
 
  name: 'product',  
  title: 'Product',  
  type: 'document',  
  fields: [  
    {  
      name: 'title',  
      title: 'Title',  
      type: 'string',  
    },    
    {  
      name: 'id',  
      title: 'ID',  
      type: 'string',  
    },  
    {  
      name: 'image',  
      title: 'Image',  
      type: 'image',  
      options: {  
        hotspot: true, // Enables image cropping in the editor  
      },  
    },  
    {  
      name: 'description',  
      title: 'Description',  
      type: 'text', // Use 'text' for longer strings  
    },  
    {  
      name: 'price',  
      title: 'Price',  
      type: 'number',  
    },  
    {  
      name: 'details',  
      title: 'Details',  
      type: 'text',  
    },  
    {  
      name: 'category',  
      title: 'Category',  
      type: 'string',  
    },  
    {  
      name: 'tags',  
      title: 'Tags',  
      type: 'string', // You might want to change this to an array of strings or a reference  
    },  
    {  
      name: 'reviews',  
      title: 'Reviews',  
      type: 'text', // If you have a more structured review system, consider another schema  
    },  
  ],  
};

  export default product