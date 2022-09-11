/* eslint-disable no-const-assign */
import React, { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import {
  CheckIcon,
  Spacer,
  ListItem,
  UnorderedList,
  Box,
  Stack,
  Flex,
  Checkbox,
  Image,
} from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
// import styles from "./Body.module.css";
import styled from "styled-components";
import "./Body.module.css";
import {
  getHotelsRequest,
  getHotelsSuccess,
  getHotelsFailure,
} from "../../Redux/AppReducer/action";

const Subheading = styled.h6`
  font-size: 18px;
  font-weight: 20px;
  padding: 10px;
`;
const Button = styled.button`
  background-color: RGB(242, 178, 3);
`;

const Body = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const hotelsData = useSelector((store) => store.app.hotels);
  const urlCategory = searchParams.getAll("category");


  const [category, setCategory] = useState(urlCategory || []);

  const gethotels = () => {
    dispatch(getHotelsRequest());
    axios
      .get("./hotels")
      .then((r) => dispatch(getHotelsSuccess(r.data)))
      .catch((e) => dispatch(getHotelsFailure(e)));
  };

  const handleChange = (e) => {
    e.preventDefault()
    let newCategory = [...hotelsData];
    const option = e.target.value;

    console.log(newCategory)
  };


  const [checked, setChecked] = useState(true); 
  const handleClick = (e) => { 
    e.preventDefault()
    setChecked(!checked); 
    let newCategory = [...category];
    const option = e.target.value;
    if(checked){
      newCategory.splice(newCategory.indexOf(option), 1);
    }
    else {
      newCategory.push(option);
    }
    setCategory(newCategory);
    console.log(newCategory);
  }; 

  // return items.filter((item) => {
  //   /*
  //   // in here we check if our region is equal to our c state
  //   // if it's equal to then only return the items that match
  //   // if not return All the countries
  //   */
  //      if (item.region == filterParam) {
  //          return searchParam.some((newItem) => {

  useEffect(() => {
    if (hotelsData?.length === 0) {
      gethotels();
    }
  }, []);

  useEffect(() => {
    if (category) {
      let params = {};
      category && (params.category = category);
      setSearchParams(params);
    }
  }, [category, searchParams]);

  return (
    <Flex pl="150px" pr="150px" bg="RGB(242, 242, 242)">
      {/* filters and sorting */}
      <Stack w="25%" pt="10px" mt="0px">
        <Box bg="#ffffff" pb="10px">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
            width="100%"
            height="100%"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </Box>
        <Box bg="#ffffff" pb="10px">
          <Subheading>Deals</Subheading>
          <UnorderedList>
            <ListItem>
              <Checkbox size="md" colorScheme="green" value="isFreeCancellation" onChange={(e) => handleClick(e)}>
                {" "}
                Free cancellation{" "}
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Reserve now, pay at stay{" "}
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Properties with special offers{" "}
              </Checkbox>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box bg="#ffffff" pb="10px">
          <Subheading>Property types</Subheading>
          <UnorderedList>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Hotels 530
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Guest Houses 453
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Resorts 234
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Speciality lodgings 104
              </Checkbox>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box bg="#ffffff" pb="10px">
          <Subheading>Popular</Subheading>
          <UnorderedList>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Breakfast included 514
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                {"&"} up 829
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                5 stars 23
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                4 stars 65
              </Checkbox>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box bg="#ffffff" pb="10px">
          <Subheading> Amenities</Subheading>
          <UnorderedList>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Free Wifi 704
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Breakfast included 514
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Pool 544
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Free parking 821
              </Checkbox>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box bg="#ffffff" pb="10px">
          <Subheading>Distance from</Subheading>
          {/* <UnorderedList>
              <ListItem>
                <Checkbox size="md" colorScheme="green">
                  {" "}
                  Old Goa{" "}
                </Checkbox>
              </ListItem>
              <ListItem>
                <Checkbox size="md" colorScheme="green">
                  {" "}
                  Bascilica of Bab Jesus {" "}
                </Checkbox>
              </ListItem>
              <ListItem>
                <Checkbox size="md" colorScheme="green">
                  {" "}
                  Tomb of ST. Francis Xavier {" "}
                </Checkbox>
              </ListItem>
              <ListItem>
                <Checkbox size="md" colorScheme="green">
                  {" "}
                  Church of Our Lady of the Immaticulate Conception {" "}
                </Checkbox>
              </ListItem>
            </UnorderedList> */}
          <RadioGroup pl="10px" pb="8px">
            <Stack direction="column">
              <Radio value="1">Old Goa</Radio>
              <Radio value="2">Bascilica of Bab Jesus</Radio>
              <Radio value="3"> Tomb of ST. Francis Xavier</Radio>
              <Radio value="4">
                {" "}
                Church of Our Lady of the Immaticulate Conception
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>
        <Box bg="#ffffff" pb="10px">
          <Subheading> Hotel class</Subheading>
          <UnorderedList>
            <ListItem>
              <Checkbox size="md" colorScheme="green"  
              value="5star"
            checked={category.includes("5star")}
            onChange={handleChange}>
                {" "}
                5 stars 23
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green" 
              value="4star"
            checked={category.includes("4star")}
            onChange={handleChange}>
                {" "}
                4 stars 65
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green" 
              value="3star"
            checked={category.includes("3star")}
            onChange={handleChange}>
                {" "}
                3 stars 335
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green" 
              value="2star"
            checked={category.includes("2star")}
            onChange={handleChange}>
                {" "}
                2 stars 184
              </Checkbox>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box bg="#ffffff" pb="10px">
          <Subheading>Style</Subheading>
          <UnorderedList>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Budget 370
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Mid-range 437
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Luxury 51
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Family-friendly 499
              </Checkbox>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box bg="#ffffff" pb="10px">
          <Subheading>Brands</Subheading>
          <UnorderedList>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                OYO 112
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Treebo 21
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                FabHotels 15
              </Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox size="md" colorScheme="green">
                {" "}
                Radisson 5
              </Checkbox>
            </ListItem>
          </UnorderedList>
        </Box>
      </Stack>
      {/* hotels list */}
      <Stack w="75%" mt="0px" p="12px">
        {hotelsData.isLoading && <div>Loading...</div>}
        {hotelsData.isError && <div>error...</div>}
        {hotelsData &&
          hotelsData.map((hotel) => {
            return (
              <>
                <Box h="280px" w="100" bg="#ffffff"  key={hotel.id} >
                  <Flex>
                    <Image
                      mh="280px"
                      boxSize="280px"
                      src={`${hotel.img_}`}
                      alt="hotels"
                    />
                    <Box p="50px">
                      <Subheading>{hotel.title}</Subheading>
                      <Spacer />
                      <Subheading>{hotel.Price}</Subheading>
                      <Button
                        style={{
                          width: "160px",
                          height: "40px",
                          borderRadius: "20px",
                        }}
                      >
                        View Deal
                      </Button>
                      {hotel.isFreeCancellation && (
                        <div style={{ padding: "5px" }}>
                          ✔️Free cancellation{" "}
                        </div>
                      )}
                      {hotel.isReserverNowPatAtStay && (
                        <div style={{ padding: "5px" }}>
                          ✔️Reserve now, pay at stay
                        </div>
                      )}
                    </Box>
                  </Flex>
                </Box>
              </>
            );
          })}
      </Stack>
    </Flex>
  );
};

export default Body;
