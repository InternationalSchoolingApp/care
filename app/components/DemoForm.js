"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import CountriesConstant from "@constants/CountryConstant";
import TimeZones from "@constants/TimeZones";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { time } from "framer-motion";
import { Mail, PhoneCall } from "lucide-react";
import Image from "next/image";
import Select from "react-select";
import ReactCountryFlag from "react-country-flag";
import Link from "next/link";

function getBrowserDetail() {
  var nVer = navigator.appVersion;
  var nAgt = navigator.userAgent;
  var browserName = navigator.appName;
  var fullVersion = "" + parseFloat(navigator.appVersion);
  var majorVersion = parseInt(navigator.appVersion, 10);
  var nameOffset, verOffset, ix;

  // In Opera, the true version is after "Opera" or after "Version"

  if ((verOffset = nAgt.indexOf("Opera")) != -1) {
    browserName = "Opera";
    fullVersion = nAgt.substring(verOffset + 6);
    if ((verOffset = nAgt.indexOf("Version")) != -1)
      fullVersion = nAgt.substring(verOffset + 8);
  }
  // In MSIE, the true version is after "MSIE" in userAgent
  else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
    browserName = "Microsoft Internet Explorer";
    fullVersion = nAgt.substring(verOffset + 5);
  }
  // In Chrome, the true version is after "Chrome"
  else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
    browserName = "Chrome";
    fullVersion = nAgt.substring(verOffset + 7);
  }
  // In Safari, the true version is after "Safari" or after "Version"
  else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
    browserName = "Safari";
    fullVersion = nAgt.substring(verOffset + 7);
    if ((verOffset = nAgt.indexOf("Version")) != -1)
      fullVersion = nAgt.substring(verOffset + 8);
  }
  // In Firefox, the true version is after "Firefox"
  else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
    browserName = "Firefox";
    fullVersion = nAgt.substring(verOffset + 8);
  }
  // In most other browsers, "name/version" is at the end of userAgent
  else if (
    (nameOffset = nAgt.lastIndexOf(" ") + 1) <
    (verOffset = nAgt.lastIndexOf("/"))
  ) {
    browserName = nAgt.substring(nameOffset, verOffset);
    fullVersion = nAgt.substring(verOffset + 1);
    if (browserName.toLowerCase() == browserName.toUpperCase()) {
      browserName = navigator.appName;
    }
  }

  // trim the fullVersion string at semicolon/space if present

  if ((ix = fullVersion.indexOf(";")) != -1)
    fullVersion = fullVersion.substring(0, ix);
  if ((ix = fullVersion.indexOf(" ")) != -1)
    fullVersion = fullVersion.substring(0, ix);

  majorVersion = parseInt("" + fullVersion, 10);
  if (isNaN(majorVersion)) {
    fullVersion = "" + parseFloat(navigator.appVersion);
    majorVersion = parseInt(navigator.appVersion, 10);
  }

  return {
    name: browserName,
    fullVersion: fullVersion,
    shortVersion: majorVersion,
    navAppName: navigator.appName,
    uAgentFull: navigator.userAgent,
  };
}

function fillBrowserDetail() {
  var browserDetails = getBrowserDetail();
  if (browserDetails != undefined && browserDetails != "") {
    return JSON.stringify(browserDetails);
  }
  return "{}";
}

function setCookie(key, value) {
  if (!value) return false;
  const expires = new Date();
  expires.setTime(expires.getTime() + 31 * 24 * 60 * 60 * 1000);
  const cname = `${key}=${value};expires=${expires.toUTCString()};domain=internationalschooling.org;path=/`;
  document.cookie = cname;
}

function urlParam(name) {
  if (!name) return false;
  const results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
    window.location.href
  );
  return results ? decodeURI(results[1]) || 0 : null;
}

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

function escapeCharacters(str) {
  return str
    .replace(/[\n\r]/g, "\\n")
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/'/g, "\\'");
}

function base64Encode(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

const DemoForm = ({ folderName, locale = "en" }) => {
  function getCookie(key) {
    if (!key) return false;
    const keyValue = document.cookie.match("(^|;) ?" + key + "=([^;]*)(;|$)");
    return keyValue ? keyValue[2] : folderName;
  }
  function getNextFiveDays() {
    const days = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      const valueDate = date
        .toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
        })
        .replace(/\//g, "-");
      const displayDate = date.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      });

      days.push({ value: valueDate, label: displayDate });
    }

    return days;
  }

  const fiveDays = getNextFiveDays();

  const [studentTimeZone, setStudentTimeZone] = useState("");

  const PRO_IP_API_URL =
    "https://pro.ip-api.com/json/?key=9908tZlRhI0pK5W&fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query";

  async function callLocationAndSelectCountryNew() {
    try {
      const response = await fetch(PRO_IP_API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      callLocationAndSelectCountryNewFill(result);
      setTimeZone(result.timezone);
      const selectedTimeZone = TimeZones.find(
        (zone) => zone.value === result.timezone
      );
      setStudentTimeZone(
        "(" + selectedTimeZone.extra + ") - " + selectedTimeZone.value
      );

      setLat(result.lat);
      setLon(result.lon);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [timezone, setTimeZone] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  function handleSlotChange(slot) {
    const startTime = slot.startTime;
    const selectedSlotObject = slots.find(
      (slotsearch) => slotsearch.startTime === startTime
    );
    setSelectedSlot(selectedSlotObject);
  }

  const customOptions = CountriesConstant.map((country) => ({
    value: country.custom_dial_code,
    label: (
      <div className="flex items-center gap-2">
        <ReactCountryFlag
          countryCode={country.custom_country_icon}
          svg
          style={{ width: "1.5em", height: "1.5em" }}
        />
        <span>{country.custom_dial_code}</span>
      </div>
    ),
    raw: country,
  }));

  useEffect(() => {
    callLocationAndSelectCountryNew();
  }, []);

  const [location, setLocation] = useState("");
  const [phoneCodeCountry, setPhoneCodeCountry] = useState("");

  const valueDate = new Date()
    .toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, "-");

  const [selectedDate, setSelectedDate] = useState(valueDate);

  function callLocationAndSelectCountryNewFill(data) {
    if (data && data.country) {
      const country = countries.find((item) => item.value === data.country);
      if (country) {
        setCountryId(country.custom_country_value);
        setCountryName(country.value);
        setPhoneCodeCountry(country.value);
        setPhoneCode(country.custom_dial_code);
      }
      setLocation(JSON.stringify(data));
    }
  }

  const router = useRouter();

  const countries = CountriesConstant;

  const [countryId, setCountryId] = useState("");
  const [countryName, setCountryName] = useState("");

  const handleCountryChange = (event) => {
    const selectedValue = event.target.value;
    const selectedCountry = countries.find(
      (country) => country.value === selectedValue
    );
    if (selectedCountry) {
      // setCountryId(selectedCountry.custom_country_value);
      setPhoneCodeCountry(selectedCountry.value);
      setPhoneCode(selectedCountry.custom_dial_code);
    }
  };

  const ORIGIN_URL = "https://internationalschooling.org";
  // const ORIGIN_URL = "http://localhost:3000";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneCode, setPhoneCode] = useState("");
  const [message, setMessage] = useState("");
  const [grade, setGrade] = useState("");
  const [relation, setRelation] = useState("");
  const [standardId, setStandardId] = useState("");

  useEffect(() => {
    const us = getCookie("us");
    if (us === "N/A") {
      const utm_source = urlParam("utm_source");
      if (utm_source) {
        setCookie("us", utm_source);
      }
    }
    const um = getCookie("um");
    if (um === "N/A") {
      const utm_medium = urlParam("utm_medium");
      if (utm_medium) {
        setCookie("um", utm_medium);
      }
    }
    const uc = getCookie("uc");
    if (uc === "N/A") {
      const utm_content = urlParam("utm_content");
      if (utm_content) {
        setCookie("uc", utm_content);
      }
    }
    const gc = getCookie("gclid");
    if (gc === "N/A") {
      const gclid = urlParam("gclid");
      if (gclid) {
        setCookie("gclid", gclid);
      }
      const fbclid = urlParam("fbclid");
      if (fbclid) {
        setCookie("gclid", fbclid);
      }
    }
    const ucamCheck = getCookie("utm_campaign");
    if (ucamCheck === "N/A") {
      const utm_campaign = urlParam("utm_campaign");
      if (utm_campaign) {
        setCookie("ucam", utm_campaign);
      }
    }
    const ut = getCookie("utm_term");
    if (ut === "N/A") {
      const utm_term = urlParam("utm_term");
      if (utm_term) {
        setCookie("ut", utm_term);
      }
    }
    setCookie("cu", window.location.href);
  }, []);

  const validateForm = () => {
    let isValid = true;

    if (!firstName?.trim()) {
      toast.error("First name is required.");
      isValid = false;
    }

    if (!lastName?.trim()) {
      toast.error("Last name is required.");
      isValid = false;
    }

    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email?.trim()) {
      toast.error("A valid email is required.");
      isValid = false;
    }

    if (!phoneCode?.trim()) {
      toast.error("ISD code is required.");
      isValid = false;
    }

    if (!phone?.trim()) {
      toast.error("A valid contact number is required.");
      isValid = false;
    }

    if (!relation) {
      toast.error("Please select your relation.");
      isValid = false;
    }

    if (!preferredCommunication?.length) {
      toast.error("Select at least one communication preference.");
      isValid = false;
    }

    if (!selectedSlot?.meetingDate) {
      toast.error("Meeting date is missing.");
      isValid = false;
    }

    if (!selectedSlot?.startTime || !selectedSlot?.endTime) {
      toast.error("Meeting slot time is incomplete.");
      isValid = false;
    }

    if (!grade) {
      toast.error("Please select your grade.");
      isValid = false;
    }

    if (!location?.trim()) {
      toast.error("Location is required.");
      isValid = false;
    }

    return isValid;
  };

  function generateRequest() {
    const requestDemoDTO = {
      name: toTitleCase(firstName),
      lastName: toTitleCase(lastName),
      counselorUserId: selectedSlot.adminUserId,
      parentEmail: email,
      requestCallFrom: "DEMO",
      isdCode: phoneCode,
      age,
      contactNumber: phone,
      browserDetails: fillBrowserDetail(),
      demoCode: "",
      relation,
      prefrence: preferredCommunication.join(","),
      relation,
      timeZone: timezone,
      studentTimeZone,
      meetingDate: selectedSlot.meetingDate,
      meetingSlotId: selectedSlot.id,
      meetingSlotTime: selectedSlot.startTime + "-" + selectedSlot.endTime,
      moduleName: "BOOKMEETING_NEW",
      grade,
      standardId,
      countryId,
      countryName,
      description: escapeCharacters(message),
      location: location,
      campaignName: folderName,
      schoolId: 1,
      utmSource: getCookie("us"),
      utmMedium: getCookie("um"),
      utmDescription: getCookie("uc"),
      originalUrl: getCookie("cu"),
      gclid: getCookie("gclid"),
      utmCampaign:
        getCookie("ucam") === "Test" ? folderName : getCookie("ucam"),
      utmTerm: getCookie("ut"),
    };
    return requestDemoDTO;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    // const url =
    // "http://localhost:9090/lead-api/api/v1/common/reqeust-demo-content";
    const url =
      "https://sm.internationalschooling.org/api/v1/common/reqeust-demo-content";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(generateRequest()),
      });

      const result = await response.json();
      if (result.status === "0" || result.status === "2") {
        toast.error(result.message);
      } else {
        let redirectUrl = "";
        let payload = "";
        if (result.name) payload += `?dn=${base64Encode(result.name)}`;
        if (result.email) payload += `&de=${base64Encode(result.email)}`;
        if (result.country) payload += `&dc=${base64Encode(result.country)}`;
        if (result.type) payload += `&t=${base64Encode(result.type)}`;
        if (result.schoolPersonId)
          payload += `&spId=${base64Encode(result.schoolPersonId)}`;
        if (result.meetingId)
          payload += `&mId=${base64Encode(result.meetingId)}`;
        if (result.timeZone) payload += `&tz=${base64Encode(result.timeZone)}`;
        if (result.eventId) payload += `&eId=${base64Encode(result.eventId)}`;
        if (result.startDate)
          payload += `&sd=${base64Encode(result.startDate)}`;
        if (result.endDate) payload += `&ed=${base64Encode(result.endDate)}`;

        redirectUrl = `${ORIGIN_URL}/${locale}/is-demo-thankyou${payload}`;
        if (folderName === "brochure") {
          redirectUrl = `${ORIGIN_URL}/${locale}/brochure-thankyou/${payload}`;
        }
        router.replace(redirectUrl);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const grades = [
    { value: "11", label: "KG" },
    { value: "12", label: "Grade 1" },
    { value: "13", label: "Grade 2" },
    { value: "14", label: "Grade 3" },
    { value: "15", label: "Grade 4" },
    { value: "16", label: "Grade 5" },
    { value: "1", label: "Grade 6" },
    { value: "2", label: "Grade 7" },
    { value: "3", label: "Grade 8" },
    { value: "4", label: "Grade 9" },
    { value: "5", label: "Grade 10" },
    { value: "6", label: "Grade 11" },
    { value: "7", label: "Grade 12" },
    { value: "22", label: "English Learning Program" },
  ];

  const handleInputChange = (event, setState) => {
    setState(event.target.value);
  };

  const handleSelectDateChange = async (e) => {
    setSelectedDate(e.target.value);
  };

  const [age, setAge] = useState("");

  useEffect(() => {
    const fetchFreeSlots = async () => {
      const url =
        "https://sm.internationalschooling.org/api/v1/common/free-slots-list";
      const payload = {
        book: "Y",
        countryTimezoneId: timezone,
        date: selectedDate,
        countryIds: countryId,
        lat: lat,
        lon: lon,
        resStatus: "fresh",
        requestType: "REQUESTDEMO",
        schoolId: 1,
      };
      setIsLoadingSlots(true);
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        const data = await response.json();
        debugger;
        const slotsData = data.requestDemoFreeSlotsDTO || [];
        setSlots(slotsData);
        if (slotsData.length > 0) {
          setSelectedSlot(slotsData[0]);
        }
      } catch (error) {
        console.error("Error fetching slots:", error);
      } finally {
        setIsLoadingSlots(false);
      }
    };
    if (selectedDate && timezone) {
      fetchFreeSlots();
    }
  }, [selectedDate, timezone, countryId]);

  const [slots, setSlots] = useState([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(true);

  const handleGradeChange = (event) => {
    const selectedValue = event.target.value;
    setGrade(selectedValue);
    const selectedGrade = grades.find((grade) => grade.value === selectedValue);
    if (selectedGrade) {
      setStandardId(selectedGrade.value);
      setGrade(selectedGrade.value);
    }
  };

  const [preferredCommunication, setPreferredCommunication] = useState([]);

  return (
    <div className="w-full md:w-[500px] border md:mx-auto bg-gray-50 rounded-xl border-gray-100 shadow px-4 py-6">
      <form className="grid grid-cols-1 gap-3 mb-2" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="relation"
            className="block mb-1 text-sm font-medium text-gray-900 "
          >
            Relation <sup>*</sup>
          </label>
          <select
            id="relation"
            name="relation"
            value={relation}
            required
            onChange={(e) => {
              setRelation(e.target.value);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5  custom-select appearance-none bg-no-repeat"
          >
            <option value="" defaultChecked disabled>
              Select
            </option>
            <option value="M">I am a Mother</option>
            <option value="F">I am a Father</option>
            <option value="G">I am a Guardian</option>
            <option value="S">I am a Student</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="mb-2 md:mb-0 ">
            <label className="block mb-1 text-sm font-medium text-gray-900 ">
              First Name <sup>*</sup>
            </label>
            <input
              name="firstName"
              id="firstName"
              required
              value={firstName}
              onChange={(e) => handleInputChange(e, setFirstName)}
              placeholder="First Name"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-900 ">
              Last Name <sup>*</sup>
            </label>
            <input
              name="lastName"
              id="lastName"
              value={lastName}
              required
              onChange={(e) => handleInputChange(e, setLastName)}
              placeholder="Last Name"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 items-center">
          <div>
            <label
              htmlFor="grade"
              className="block mb-1 text-sm font-medium text-gray-900 "
            >
              Grade <sup>*</sup>
            </label>
            <select
              id="grade"
              name="grade"
              value={grade}
              required
              onChange={handleGradeChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5  custom-select appearance-none bg-no-repeat"
            >
              <option value="" disabled defaultChecked>
                Select
              </option>
              {grades.map((grade, index) => (
                <option key={index} value={grade.value}>
                  {grade.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-900">
              Age
            </label>
            <select
              name="age"
              id="age"
              value={age}
              required
              onChange={(e) => setAge(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5  custom-select appearance-none bg-no-repeat"
            >
              <option value="">Select</option>
              {Array.from({ length: 23 }, (_, i) => i + 3).map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-1 text-sm font-medium text-gray-900 "
          >
            Email <sup>*</sup>
          </label>
          <input
            autoComplete="current-username"
            name="email"
            id="email"
            required
            type="email"
            value={email}
            onChange={(e) => handleInputChange(e, setEmail)}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
            placeholder="Enter Email"
          />
        </div>

        <div className="w-full flex items-center gap-1">
          <div>
            <label
              htmlFor="phoneCode"
              className="block text-sm font-medium mt-1 text-gray-900 "
            >
              Phone Code <sup>*</sup>
            </label>
            {/* <Select
              options={customOptions}
              value={customOptions.find((opt) => opt.value === phoneCode)}
              onChange={(option) => setPhoneCode(option.value)}
              classNamePrefix="react-select"
              styles={{
                control: (provided) => ({
                  ...provided,
                  backgroundColor: "transparent",
                  borderColor: "#ccc",
                  boxShadow: "none",
                }),
                menu: (provided) => ({
                  ...provided,
                  // backgroundColor: "transparent",
                }),
                option: (provided, state) => ({
                  ...provided,
                  backgroundColor: state.isFocused
                    ? "rgba(0,0,0,0.1)"
                    : "transparent",
                  color: "#000",
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "#000",
                }),
              }}
            /> */}
            <Select
              options={customOptions}
              value={customOptions.find((opt) => opt.value === phoneCode)}
              onChange={(option) => setPhoneCode(option.value)}
              classNamePrefix="react-select"
              styles={{
                control: (base, state) => ({
                  ...base,
                  backgroundColor: "#f9fafb", // bg-gray-50
                  borderColor: state.isFocused ? "#2563eb" : "#d1d5db", // focus:ring-blue-600 || border-gray-300
                  boxShadow: state.isFocused ? "0 0 0 1px #2563eb" : "none",
                  borderRadius: "0.5rem", // rounded-lg
                  fontSize: "0.875rem", // sm:text-sm
                  color: "#111827", // text-gray-900
                  padding: "0.13rem",
                  minHeight: "1.5rem", // match p-2.5 height
                }),
                menu: (base) => ({
                  ...base,
                  // backgroundColor: "#f9fafb", // bg-gray-50
                  borderRadius: "0.5rem",
                  border: "1px solid #d1d5db", // border-gray-300
                  zIndex: 50,
                }),
                option: (base, state) => ({
                  ...base,
                  backgroundColor: state.isFocused ? "#e5e7eb" : "transparent", // hover:bg-gray-200
                  color: "#111827",
                  padding: "0.5rem",
                }),
                singleValue: (base) => ({
                  ...base,
                  color: "#111827",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }),
                indicatorSeparator: () => ({ display: "none" }),
              }}
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="phone"
              className="mb-1 text-sm font-medium text-gray-900 "
            >
              Phone Number <sup>*</sup>
            </label>
            <input
              name="phone"
              required
              maxLength="15"
              id="phone"
              value={phone}
              onChange={(e) => {
                const numericValue = e.target.value.replace(/\D/g, "");
                setPhone(numericValue);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 w-full p-2.5 "
              placeholder="Enter Phone"
            />
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">
            Connect with me on - <sup>*</sup>
          </p>
          <div className="flex gap-4 flex-wrap">
            {[
              {
                label: "Whatsapp",
                value: "Whatsapp",
                icon: (
                  <Image
                    src="/whatsapp.svg"
                    width={15}
                    height={15}
                    alt="whatsapp"
                  />
                ),
              },
              {
                label: "Call",
                value: "Call",
                icon: <PhoneCall strokeWidth={1.5} size={17} />,
              },
              {
                label: "Email",
                value: "Email",
                icon: <Mail strokeWidth={1.5} size={17} />,
              },
            ].map(({ label, value, icon }) => (
              <label key={value} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="preferredCommunication"
                  value={value}
                  checked={preferredCommunication.includes(value)}
                  onChange={(e) => {
                    const { value, checked } = e.target;
                    if (checked) {
                      setPreferredCommunication([
                        ...preferredCommunication,
                        value,
                      ]);
                    } else {
                      setPreferredCommunication(
                        preferredCommunication.filter((v) => v !== value)
                      );
                    }
                  }}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="text-sm text-gray-700 flex gap-2 items-center">
                  {icon} {label}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="phoneCode"
            className="block mb-1 text-sm font-medium text-gray-900 "
          >
            Country <sup>*</sup>
          </label>
          <select
            id="country"
            name="country"
            value={countryName}
            required
            onChange={(e) => {
              const selectedValue = e.target.value;

              const selectedCountry = countries.find(
                (country) => country.value === selectedValue
              );
              if (selectedCountry) {
                setCountryId(selectedCountry.custom_country_value);
                setCountryName(selectedCountry.value);
              }

              setCountryName(e.target.value);
            }}
            className="bg-gray-50 border px-4 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5  custom-select appearance-none bg-no-repeat"
          >
            <option value="" disabled defaultChecked>
              Select Code
            </option>
            {countries.map((item, index) => (
              <option key={index} value={item.value}>
                {item.value}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="phoneCode"
            className="block mb-1 text-sm font-medium text-gray-900 "
          >
            Select a Date for School Demo<sup>*</sup>
          </label>
          <select
            value={selectedDate}
            onChange={(e) => {
              handleSelectDateChange(e);
            }}
            className="bg-gray-50 border px-4 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 select"
            id="chooseDate"
            name="chooseDate"
            tabIndex="10"
            data-gtm-form-interact-field-id="0"
          >
            {fiveDays.map((date, index) => (
              <option key={index} value={date.value}>
                {date.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-1 text-sm font-medium text-gray-900"
          >
            Select a Time for School Demo<sup>*</sup>
          </label>
          <div className="h-[220px] overflow-y-auto">
            {isLoadingSlots ? (
              <div className=" h-full flex flex-col gap-2 items-center justify-center ">
                <p>Getting Slots</p>
                <span className="loading  loading-xl loading-spinner"></span>
              </div>
            ) : (
              <div className="w-full h-full">
                {slots.length > 0 ? (
                  <>
                    {slots.map((slot, index) => (
                      <div
                        key={index}
                        className="mb-2 py-2 px-2 md:px-4 rounded-lg border "
                      >
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name={"timeSlot"}
                            value={slot.startTime}
                            checked={
                              selectedSlot &&
                              selectedSlot.startTime === slot.startTime
                            }
                            onClick={() => {
                              handleSlotChange(slot);
                            }}
                            onChange={() => {
                              handleSlotChange(slot);
                            }}
                            className="mr-2"
                          />
                          {`${slot.startTime} - ${slot.endTime} `}
                        </label>
                      </div>
                    ))}
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <p>No Slot for today</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-1 text-sm font-medium text-gray-900 "
          >
            Tell us more about your child
          </label>
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={(e) => handleInputChange(e, setMessage)}
            placeholder="Type a message..."
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
          />
        </div>

        <button
          type="submit"
          className="w-full text-white bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      <p className="font-semibold text-[10px] text-red-600">
        By submitting this form, I am giving my consent to International
        Schooling to contact me for further details related to their programs.
        To know more about International schooling, please read our{" "}
        <Link
          target="_blank"
          className="text-blue-600"
          href={"https://internationalschooling.org/privacy-policy"}
        >
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link
          href={"https://internationalschooling.org/terms-of-use"}
          target="_blank"
          className="text-blue-600"
        >
          Terms of Use
        </Link>
      </p>
      <ToastContainer />
    </div>
  );
};

export default DemoForm;
