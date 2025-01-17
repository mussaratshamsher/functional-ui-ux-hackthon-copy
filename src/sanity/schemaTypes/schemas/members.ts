const members ={
    name: 'member', 
    title: 'Member', 
    type: 'document', 
    fields: [
         {
         name: 'title',
         title: 'Title',
          type: 'string', }, 
        {
         name: 'image',
         title: 'Image',
          type: 'image', 
          options: {
         hotspot: true, 
            }, },
         { 
         name: 'designation',
         title: 'Designation', 
         type: 'string', }, ],



}

export default members