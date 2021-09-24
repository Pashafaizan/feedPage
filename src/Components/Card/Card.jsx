import React, { useState, useEffect, useRef, useCallback } from "react";
import { ReactComponent as ThumbUp } from "../../resources/thumb_up.svg";
import { ReactComponent as Share } from "../../resources/share.svg";
import { ReactComponent as View } from "../../resources/remove_red_eye.svg";
import { useSelector, useDispatch } from "react-redux";
import BottomSheet from "../BottomSheet/BottomSheet";
import { fetchData } from "../../acton/index";
import "./card.css";
function Card() {
  const [data, setData] = useState([]);
  const [bottomSheetState, setBottomSheetState] = useState(false);
  const [currentCard, setCurrentCard] = useState({});
  const [loader,setLoader]=useState(true);
  const api = useSelector((state) => state.changeTheApi);
  const sortMethod = useSelector((state) => state.changeSortMethod);
  const dispatch = useDispatch();
 
  const inputEl = useRef(null);

  const bottomBoundaryRef = useRef(null);
  const scrollObserver = useCallback((node) => {
    setLoader(true);
    new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.intersectionRatio > 0 && en.intersectionRatio <4) {
         
          dispatch({ type: "FETCH" });
        
        }
      });
    }).observe(node);
  }, []);
  useEffect(() => {
    
    if (bottomBoundaryRef.current) {
      scrollObserver(bottomBoundaryRef.current);
    }
  }, [scrollObserver, bottomBoundaryRef]);
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  async function getData() {
    setLoader(true);
    if(api==''){
      setLoader(false)
return;
    }
    await fetch(api, requestOptions)
      .then((response) => response.json())
      .then((d) => {
        setLoader(false);
        setData([...data, ...d.posts]);
   
      });
  }
  useEffect(async () => {
    await getData();
  }, [api]);

  function sortData(sortMethod) {
    const beforeSort = data;
    switch (sortMethod) {
      case "LIKE":
        beforeSort.sort((a, b) => (a.likes < b.likes ? 1 : -1));
        setData([...beforeSort]);
        break;
      case "DATE":
        beforeSort.sort((a, b) => (a.event_date < b.event_date ? 1 : -1));
        setData([...beforeSort]);
        break;
      case "SHARE":
        beforeSort.sort((a, b) => (a.shares < b.shares ? 1 : -1));
        setData([...beforeSort]);
        break;
        
      case "VIEWS":
        beforeSort.sort((a, b) => (a.views < b.views ? 1 : -1));
        setData([...beforeSort]);
        break;
      default:
        beforeSort.sort((a, b) => (a.event_date < b.event_date ? 1 : -1));
        setData([...beforeSort]);
    }
  }

  useEffect(() => {
    sortData(sortMethod);
  }, [sortMethod]);

  return (
    <div style={{ marginTop: 60 }}>
      <div className="card_box">
        {data.map((e, i) => {
          return (
            <div
              className="card"
              onClick={() => {
                setCurrentCard(e);
                setBottomSheetState(true);
              }}
            >
              <div className="card_header">
                <div>
                  <div style={{ padding: 5 }}>{e.event_name}</div>
                  <div style={{ padding: 5 }}>
                    {new Date(e.event_date).toLocaleString()}
                  </div>
                </div>
                <View style={{ marginRight: 20 }} />
              </div>
              <img className="image" src={e.thumbnail_image} />
              <div style={{ padding: 5 }} className="card_footer">
                <div>
                  <ThumbUp onClick={() => {}} />
                </div>
                <div>
                  <Share />
                </div>
              </div>
            </div>
          );
        })}

  
       <div
          id="page-bottom-boundary"
          style={{ display:"flex",justifyContent:"center",alignItems:"center"}}
          ref={bottomBoundaryRef}
        >
         {loader && <div class="loader"></div>}
        </div>
        {bottomSheetState && (
          <BottomSheet
            card={currentCard}
            close={() => {
              setBottomSheetState(false);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Card;
