// schemas/category.js  

const category ={  
    name: 'category',  
    title: 'Food Category',  
    type: 'document',  
    fields: [  
      {  
        name: 'title',  
        title: 'Category Title',  
        type: 'string',  
      }, 
      {  
        name: 'amount',  
        title: 'Amount',  
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
          hotspot: true  
        }  
      },  
    ],  
  };
  export default category