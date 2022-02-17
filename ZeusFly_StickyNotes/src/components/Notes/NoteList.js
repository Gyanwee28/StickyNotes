import NoteItem from './NoteItem';
import classes from './NoteList.module.css';
function NoteList(props){
 
    
    return(
        <ul className={classes.noteList}>
            {props.notes.map((note)=>(
               
               <NoteItem 
                key={note.id}
                id={note.id}
                title={note.title}
                body={note.body}
                image={note.image}
                setitemChange={props.setitemChange}
                itemChange={props.itemChange}
                // link={note.link}

                />
                
                
            ))}

        </ul>
        
    );
}

export default NoteList;