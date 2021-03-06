import { useEffect } from "react";
import axios from 'axios'; 
import Field from "../components/Field.js/Field";
import Farm from "../components/Farm/Farm";


const FieldList = ( {fieldList, setFieldList} ) => {

            useEffect( () => { axios.get('http://127.0.0.1:8080/fields/fields')
            .then(res => {const fieldList = res.data;
            setFieldList(fieldList);
             }).catch(err => console.log(err)); 
  });

  return (
    <>
        
        <ul>
          {fieldList.map(field =>
              <li key={field.id}><Farm 
                    fieldId={field.id}
                    fieldName={field.name}
                    fieldTimeLeft={field.timeLeft}
                    fieldSoilType={field.soilType}
                    fieldFieldType={field.fieldType}
                    fieldCrop={field.crop}
                    fieldFarm={field.farm}
                /></li>
              )
          }
        </ul>
        
    </>
  )
}

export default FieldList;