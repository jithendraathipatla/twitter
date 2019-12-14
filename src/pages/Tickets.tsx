import React,{useState} from 'react';

const Tickets = () => {
    const [state, setstate] = useState([{
        "id":1,
        "name":"Jithendra Kumar",
        "email":"athipatala.jithendra@gmail.com",
        "actions":["refund ", "canel  ", "download"],
        "date":"12/14/2019"
    },
    {
        "id":2,
        "name":"Jithendra Kumar",
         "email":"athipatala.jithendra@gmail.com",
         "actions":["refund ", "canel  ", "download"],
        "date":"12/14/2019"
    },
    {
        "id":3,
        "name":"Jithendra Kumar",
         "email":"athipatala.jithendra@gmail.com",
         "actions":["refund ", "canel  ", "download"],
        "date":"12/14/2019"
    },
    {
        "id":4,
        "name":"Jithendra Kumar",
         "email":"athipatala.jithendra@gmail.com",
         "actions":["refund ", "canel  ", "download"],
        "date":"12/14/2019"
    },
    {
        "id":5,
        "name":"Jithendra Kumar",
         "email":"athipatala.jithendra@gmail.com",
         "actions":["refund ", "canel  ", "download"],
        "date":"12/14/2019"
    },
    {
        "id":1,
        "name":"Jithendra Kumar",
         "email":"athipatala.jithendra@gmail.com",
         "actions":["refund ", "canel  ", "download"],
        "date":"12/14/2019"
    },
    {
        "id":2,
        "name":"Jithendra Kumar",
         "email":"athipatala.jithendra@gmail.com",
         "actions":["refund ", "canel  ", "download"],
        "date":"12/14/2019"
    },
    {
        "id":3,
        "name":"Jithendra Kumar",
         "email":"athipatala.jithendra@gmail.com",
         "actions":["refund ", "canel  ", "download"],
        "date":"12/14/2019"
    },
    {
        "id":4,
        "name":"Jithendra Kumar",
         "email":"athipatala.jithendra@gmail.com",
         "actions":["refund ", "canel  ", "download"],
        "date":"12/14/2019"
    },
    {
        "id":5,
        "name":"Jithendra Kumar",
         "email":"athipatala.jithendra@gmail.com",
         "actions":["refund ", "canel  ", "download"],
        "date":"12/14/2019"
    },
    {
        "id":1,
        "name":"Jithendra Kumar",
         "email":"athipatala.jithendra@gmail.com",
         "actions":["refund ", "canel  ", "download"],
        "date":"12/14/2019"
    },
    {
        "id":2,
        "name":"Jithendra Kumar",
         "email":"athipatala.jithendra@gmail.com",
         "actions":["refund ", "canel  ", "download"],
        "date":"12/14/2019"
    },
    {
        "id":3,
        "name":"Jithendra Kumar",
         "email":"athipatala.jithendra@gmail.com",
         "actions":["refund ", "canel  ", "download"],
        "date":"12/14/2019"
    },
    {
        "id":4,
        "name":"Jithendra Kumar",
         "email":"athipatala.jithendra@gmail.com",
         "actions":["refund ", "canel  ", "download"],
        "date":"12/14/2019"
    },
    {
        "id":5,
        "name":"Jithendra Kumar",
         "email":"athipatala.jithendra@gmail.com",
         "actions":["refund ", "canel  ", "download"],
        "date":"12/14/2019"
    },
    {
        "id":1,
        "name":"Jithendra Kumar",
         "email":"athipatala.jithendra@gmail.com",
         "actions":["refund ", "canel  ", "download"],
        "date":"12/14/2019"
    },
    {
        "id":2,
        "name":"Jithendra Kumar",
         "email":"athipatala.jithendra@gmail.com",
         "actions":["refund ", "canel  ", "download"],
        "date":"12/14/2019"
    },
    {
        "id":3,
        "name":"Jithendra Kumar",
         "email":"athipatala.jithendra@gmail.com",
         "actions":["refund ", "canel  ", "download"],
        "date":"12/14/2019"
    },
    {
        "id":4,
        "name":"Jithendra Kumar",
         "email":"athipatala.jithendra@gmail.com",
         "actions":["refund ", "canel  ", "download"],
        "date":"12/14/2019"
    },
    {
        "id":5,
        "name":"Jithendra Kumar",
         "email":"athipatala.jithendra@gmail.com",
         "actions":["refund ", "canel  ", "download"],
        "date":"12/14/2019"
    },
    {
        "id":1,
        "name":"Jithendra Kumar",
         "email":"athipatala.jithendra@gmail.com",
         "actions":["refund ", "canel  ", "download"],
        "date":"12/14/2019"
    },
    {
        "id":2,
        "name":"Jithendra Kumar",
         "email":"athipatala.jithendra@gmail.com",
         "actions":["refund ", "canel  ", "download"],
        "date":"12/14/2019"
    },
    {
        "id":3,
        "name":"Jithendra Kumar",
         "email":"athipatala.jithendra@gmail.com",
         "actions":["refund ", "canel  ", "download"],
        "date":"12/14/2019"
    },
    {
        "id":4,
        "name":"Jithendra Kumar",
         "email":"athipatala.jithendra@gmail.com",
         "actions":["refund ", "canel  ", "download"],
        "date":"12/14/2019"
    },
    {
        "id":5,
        "name":"Jithendra Kumar",
         "email":"athipatala.jithendra@gmail.com",
         "actions":["refund ", "canel  ", "download"],
        "date":"12/14/2019"
    }

    ]);

    const displaying_tabelcontent = () => {
      return (  state.map((item,i)=>{
            return(
                <div key={i} className="tabel_body">
                  <div>{item.id}</div>
                  <div>{item.name}</div>
                  <div>{item.email}</div>
                  <div>{item.actions}</div>
                  <div>{item.date}</div>
                </div>
            )
        })
      );
    };

    return (
        <div className="tabel">
           <div className="tabel_header">
              <h4>S.N0</h4>
              <h4>Name</h4>
              <h4>Email</h4>
              <h4>Actions</h4>
              <h4>Date</h4>
           </div>
           <div>
             {displaying_tabelcontent()};
           </div>
        </div>
    );
};

export default Tickets;