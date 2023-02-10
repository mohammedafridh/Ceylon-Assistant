import { useEffect, useState } from "react";
import {
  Modal,
  MultiSelect,
  NativeSelect,
  useMantineTheme,
} from "@mantine/core";
// import '../Pages/AddThingsToDo/AddThingsToDoContents/AddThings.css'
import { db, storage } from "../../Firebase";
import { query, doc, updateDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { useUserAuth } from "../../Context/Context";
import './ProfileUpdateModal.css'
import { toast } from "react-hot-toast";

function ProfileUpdateModal({ modalOpened, setModalOpened, user }) {
  const theme = useMantineTheme();
  const [fName, setFName] = useState(user.firstName);
  const [lName, setLName] = useState(user.lastName);
  const [contactNumber, setContactNumber] = useState(user.contactNumber);
  const [address, setAddress] = useState(user.address);
  const [guideRate, setGuideRate] = useState(user.guideRate);
  const [model, setModel] = useState(user.model);
  const [maxPassengers, setMaxPassengers] = useState(user.maxPassengers);
  const [perKm, setPerKm] = useState(user.perKmRate);
  const [profile, setProfile] = useState("");
  const [imgError, setImgError] = useState(false);
  const [url, setUrl] = useState(null);
  const [formStatus, setFormStatus] = useState("");
  const [languages, setLanguages] = useState(user.languages);
  const [district, setDistrict] = useState(user.district);
  const [type, setType] = useState(user);
  const [vehicleType, setVehicleType] = useState(user.vehicleType);

  useEffect(() => {
    setFName(user.firstName);
    setLName(user.lastName);
    setContactNumber(user.contactNumber);
    setAddress(user.address);
    setGuideRate(user.guideRate);
    setMaxPassengers(user.maxPassengers);
    setPerKm(user.perKmRate);
    setModel(user.model);
    setLanguages(user.languages);
    setVehicleType(user.vehicleType);
    setType(user.guideType);
    setDistrict(user.district);
    console.log({ user });
  }, [user]);

  const setImage = (e, imageFolder, setUrl) => {
    const image = e.target.files[0];
    const storageImageRef = ref(
      storage,
      `${imageFolder}/${image?.name + v4()}`
    );
    if (image === null || image === undefined || image === "") {
      console.log("No file selected");
      setImgError(true);
      return;
    }
    uploadBytes(storageImageRef, image).then(() => {
      setImgError(false);
      getDownloadURL(storageImageRef)
        .then((url) => {
          setUrl(url);
          console.log({ profile: url });
        })
        .catch((error) => {
          console.log({ error });
        });
    });
  };
  const languageData = [
    "Sinhala",
    "English",
    "Hindi",
    "Malayalam",
    "Urdu",
    "French",
    "Arabic",
    "Spanish",
    "Russian",
    "Chinese",
    "Japanese",
    "Italian",
    "Korean",
  ];
  const typeData = ["National", "Site"];
  const districtData = [
    "Hambanthota",
    "Matara",
    "Galle",
    "Badulla",
    "Monaragala",
    "Trincomalee",
    "Batticaloa",
    "Ampara",
    "Kegalle",
    "Rathnapura",
    "Matale",
    "Kandy",
    "Nuwara-Eliya",
    "Anuradhapura",
    "Polonnaruwa",
    "Gampaha",
    "Colombo",
    "Kalutara",
    "Puttalam",
    "Kurunegala",
    "Jaffna",
    "Kilinochchi",
    "Mannar",
    "Mullativu",
    "Vavuniya",
  ];


  const carType = [ 'Car', 'Van', 'Mini Jeep'];

  const updateDetails = async (data) => {
    setDoc(
      doc(db, "Guides", data.id),
      {
        firstName: fName,
        lastName: lName,
        contactNumber: contactNumber,
        address: address,
        district: district,
        guideType: type,
        languages: languages,
        guideRate: guideRate,
        vehicleType: vehicleType,
        model: model,
        maxPassengers: maxPassengers,
        perKmRate: perKm,
        image: profile ? profile : data.image,
      },
      { merge: true }
    ).then(() => {
      toast.success("Details Updated Successfully");
      setModalOpened(false);
    });

  };

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.25}
      overlayBlur={0.5}
      size="60%"
      opened={modalOpened}
      onClose={() => {
        setModalOpened(false);
        //  setQuestion('');
        //  setAnswer('')
      }}
    >
      <div className="infoForm">
        <h3>Add Guide</h3>

        {imgError ? (
          <p style={{ color: "red", fontWeight: "bold" }}>
            * Please select a valid image!
          </p>
        ) : (
          ""
        )}

        <div>
          <input
            type="text"
            className="infoInput"
            onChange={(e) => setFName(e.target.value)}
            placeholder="First Name"
            value={fName}
            required
          />
          <input
            type="text"
            className="infoInput"
            onChange={(e) => setLName(e.target.value)}
            placeholder="Last Name"
            value={lName}
            required
          />
        </div>

        <div>
          <input
            type="number"
            className="infoInput"
            onChange={(e) => setContactNumber(e.target.value)}
            placeholder="Contact Number"
            value={contactNumber}
            required
          />

          <MultiSelect
            data={languageData}
            value={languages}
            onChange={setLanguages}
            style = {{minWidth:390}}
          />

        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            value={address}
            required
          />
          <NativeSelect
            className="typeDrop"
            data={districtData}
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          />

        </div>

        <div>
          <NativeSelect
            className="guideDrop"
            onChange={(e) => setType(e.target.value)}
            data={typeData}
            value={type}
          />

          <input
            type="number"
            className="infoInput"
            onChange={(e) => setGuideRate(e.target.value)}
            placeholder="Guide Rate Per Day"
            value={guideRate}
            required
          />

          <div className="perKm">
            <input
              type="number"
              className="infoInput"
              onChange={(e) => setPerKm(e.target.value)}
              placeholder="Per Km Rate"
              value={perKm}
              required
            />
            <span>*Per Km Rate for own vehicle</span>
          </div>
        </div>

        <div>

          <NativeSelect
            className="typeDrop"
            // label="Vehicle Type"
            onChange={(e) => setVehicleType(e.target.value)}
            data={carType}
            value={vehicleType}
          />

          <input
            type="text"
            className="infoInput"
            onChange={(e) => setModel(e.target.value)}
            placeholder="Vehicle Model"
            value={model}
          />
          <input
            type="number"
            className="infoInput"
            onChange={(e) => setMaxPassengers(e.target.value)}
            placeholder="Maximum Passengers"
            value={maxPassengers}
            required
          />

        </div>

        <span className="authProfiles">
          <span>Profile Image</span>
          <img src={profile ? profile : user.image} width={250} height={250} alt="profile" />
          <input
            type="file"
            name="coverImg"
            placeholder="Update Image"
            onChange={(e) => setImage(e, "Guide_Profile", setProfile)}
            required
          />
        </span>

        <button
          onClick={() => updateDetails(user)}
          className="buttons"
        >
          Update Details
        </button>
      </div>
    </Modal>
  );
}

export default ProfileUpdateModal;
