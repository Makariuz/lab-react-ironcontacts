import './App.css';
import contacts from './contacts.json'
import  {useState} from 'react'
import {IoIosArrowDropdownCircle  } from 'react-icons/io';



function App() {


  let randomContact = contacts[Math.floor(Math.random()*contacts.length)]
    const [rndContact, setRndContact] = useState(randomContact)
  let firstFiveContacts = contacts.slice(0, 3)
  const [contactList, setContactList] = useState(firstFiveContacts)
/*   const [rndContact, setRndContact] = useState(randomContact) */
 
  const handleSortName = () => {
    const newList = [...contactList]
    newList.sort((a,b) => {
        if (a.name > b.name){
         
          return 1
        } if (b.name > a.name){
          return -1
        }
        return 0
      })
      setContactList(newList)
    

  }



  const handleSortPop = () => {
    const newList = [...contactList]
    newList.sort((a,b) => {
        if (a.popularity > b.popularity){
         
          return -1
        } if (b.popularity > a.popularity){
          return 1
        }
        return 0
      })
      setContactList(newList)
  
  }

/* couldn't make it recursive and repeat.. */
  const handleRndContact = () => {
    const newList = [...contactList]
   
    /* setRndContact(newList.splice(newList.length - 1, 0, rndContact)) */
    setRndContact(newList.push(rndContact)) 
    setContactList([...contactList, rndContact])
    
  }

  const handleDeleteContact = contactId => {
    const filteredContact = contactList.filter(contact => {
      return contact.id !== contactId
      
    })
    setContactList(filteredContact)

  }



  return (
    <div className="App">
     {/*  {console.log(firstFiveContacts)} */}
     <div className="header">
   
    {/* CURRENTLY the randomcontact only appears when in mobile view, since i was testing, however, it was not working
    well as I mentioned earlier in the code */}
     <div className="btn-div">
     <button className='dropbtn' onClick={handleRndContact}>Add a random contact</button>
     <div className="dropdown"> 
       <button className="dropbtn">Sort By <IoIosArrowDropdownCircle /></button>
       <div className="dropdown-content">
         <button onClick={handleSortName}>Name</button>
         <button onClick={handleSortPop}>Popularity</button>
       </div>
       
       </div> 
     </div>
     </div>
     <table>
     <caption>IronContacts</caption>
    
     <thead>
    <tr>
   
       <th>Picture</th>
       <th>Name</th>
       <th>Popularity</th>
       <th>Won an Oscar</th>
       <th>Won an Emmy</th>
        <th className="dropdown"> 
       <button className="dropbtn">Sort By <IoIosArrowDropdownCircle /></button>
       <div className="dropdown-content">
         <button onClick={handleSortName}>Name</button>
         <button onClick={handleSortPop}>Popularity</button>
       </div>
       
       </th> 
       
    
     </tr>
     </thead>
     {contactList.map((contact) => {
       return (
         <tbody key={contact.id}>
          <tr  className="tes">
            <td className='rowImg'><img src={contact.pictureUrl} alt={contact.name} height="100px" /></td>
            <td>{contact.name}</td>
            <td>{Number(contact.popularity).toFixed(2)}</td>
            <td>{contact.wonOscar ? '🏆' : ''}</td>
            <td>{contact.wonEmmy ? '🏆' : ''}</td>
            <td> <button onClick={() => handleDeleteContact(contact.id)}>Delete</button> </td>
          </tr>
          </tbody>
       )
     })}
     </table>
    </div>
  );
}

export default App;
