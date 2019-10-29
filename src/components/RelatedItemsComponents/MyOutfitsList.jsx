import React, { useState, useEffect } from "react";
import MyOutfitCard from "./MyOutfitCard.jsx";
import { makeStyles } from "@material-ui/core/styles";
import ItemsCarousel from "react-items-carousel";
import Typography from "@material-ui/core/Typography";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import AddOutfitCardButton from "./AddOutfitCardButton.jsx"

export default function MyOutfitsList(props) {
  if (!window.localStorage.getItem("Shop-Box-My-Outfits")) {
    window.localStorage.setItem("Shop-Box-My-Outfits", "[]");
  }
  //get data from local storage - synchronous
  //save it to the local storage before it unmounts
  const [myOutfits, setmyOutfits] = useState(
    JSON.parse(window.localStorage.getItem("Shop-Box-My-Outfits"))
  );

  const [isItInMyOutfit, setisItInMyOutfit] = useState(false)
  
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const checkInOutfit = id => {
    return myOutfits.reduce((acc, cur) => {
      if (acc) {
        return true;
      } else {
        return cur.id === id ? true : false;
      }
    }, false);
  };


  const removeFromOutfits=(index)=>{
    let removed = myOutfits.slice()
    removed.splice(index,1)
    addToLocalStorage(removed)
    setmyOutfits(removed);

  }

  const addToOufits = () => {
    if (!isItInMyOutfit) {
      let newOutfit = {
        id: props.productInfo.id,
        ...props.productInfo,
        productStyles: props.productStyles,
        ...props.reviewMetaData
      };
      let newState = [newOutfit, ...myOutfits];
      
      addToLocalStorage(newState);
      setmyOutfits(newState);
      setisItInMyOutfit(true)
    }
  };

  const addToLocalStorage = myOutfits => {
    let stringStringString = JSON.stringify(myOutfits);
    window.localStorage.setItem("Shop-Box-My-Outfits", stringStringString);
  };

  useEffect(() => {
    return () => {
      addToLocalStorage(myOutfits);
    };
  }, []);

  useEffect(()=>{
    setisItInMyOutfit(checkInOutfit(props.productInfo.id))
  }, [props.productInfo.id])

  return (
    <div style={{ padding: "0 60px", height:375, width: 800, margin: "0 auto" }}>
      <Typography>MY OUTFITS</Typography>
      <ItemsCarousel
        infiniteLoop={false}
        gutter={30}
        activePosition={"center"}
        chevronWidth={70}
        disableSwipe={false}
        alwaysShowChevrons={false}
        numberOfCards={3}
        slidesToScroll={1}
        outsideChevron={true}
        showSlither={true}
        firstAndLastGutter={true}
        activeItemIndex={activeItemIndex}
        requestToChangeActive={value => {
          setActiveItemIndex(value);
        }}
        rightChevron={<NavigateNextIcon />}
        leftChevron={<NavigateBeforeIcon />}
      >
        {
          !isItInMyOutfit && <AddOutfitCardButton add = {addToOufits}/>
        }
        
        
        {myOutfits.map((item, index) => {
          return (
            <MyOutfitCard
              index={index}
              key={item.id}
              resetCarousel={setActiveItemIndex}
              myOutfit={item}
              removeFromOutfits={removeFromOutfits}
              goToOutfit={props.setStoreProductInfo}
              setisItInMyOutfit = {setisItInMyOutfit}
            />
          );
        })}
      </ItemsCarousel>
    </div>
  );
}

//asd
