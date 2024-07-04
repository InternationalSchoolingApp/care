"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import CountriesConstant from '../constants/CountryConstant';
import TimeZones from '@constants/TimeZones';

function getCookie(key) {
    if (!key) return false;
    const keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : 'Test';
}

function setCookie(key, value) {
    if (!value) return false;
    const expires = new Date();
    expires.setTime(expires.getTime() + (31 * 24 * 60 * 60 * 1000));
    const cname = `${key}=${value};expires=${expires.toUTCString()};domain=internationalschooling.org;path=/`;
    document.cookie = cname;
}

function urlParam(name) {
    if (!name) return false;
    const results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results ? decodeURI(results[1]) || 0 : null;
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

function escapeCharacters(str) {
    return str.replace(/[\n\r]/g, '\\n').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/'/g, "\\'");
}

function base64Encode(str) {
    return btoa(unescape(encodeURIComponent(str)));
}






const DemoForm = ({ folderName }) => {

    function getNextFiveDays() {
        const days = [];
        const today = new Date();

        for (let i = 0; i < 5; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);

            const valueDate = date.toLocaleDateString('en-US', {
                month: '2-digit',
                day: '2-digit',
                year: 'numeric'
            }).replace(/\//g, '-'); // MM-DD-YYYY format
            const displayDate = date.toLocaleDateString('en-US', {
                month: 'short',
                day: '2-digit',
                year: 'numeric'
            });

            days.push({ value: valueDate, label: displayDate });
        }

        return days;
    }



    const fiveDays = getNextFiveDays();

    const [studentTimeZone, setStudentTimeZone] = useState("");

    const PRO_IP_API_URL = 'https://pro.ip-api.com/json/?key=9908tZlRhI0pK5W&fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query';

    async function callLocationAndSelectCountryNew() {

        try {
            const response = await fetch(PRO_IP_API_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            const result = await response.json();

            callLocationAndSelectCountryNewFill(result);

            setTimeZone(result.timezone);
            const selectedTimeZone = TimeZones.find(zone => zone.value === result.timezone);
            setStudentTimeZone("(" + selectedTimeZone.extra + ") - " + selectedTimeZone.value);

            setLat(result.lat);
            setLon(result.lon);

        } catch (error) {
            console.error('Error:', error);
        }
    }

    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const [timezone, setTimeZone] = useState("Asia/Singapore");
    const [selectedSlot, setSelectedSlot] = useState(null);

    const handleSlotChange = (event) => {
        const slotId = parseInt(event.target.value);
        const selectedSlotObject = slots.find(slot => slot.id === slotId);
        setSelectedSlot(selectedSlotObject);
    };


    useEffect(() => {
        callLocationAndSelectCountryNew();
    }, []);


    const [location, setLocation] = useState('');
    const [phoneCodeCountry, setPhoneCodeCountry] = useState('');


    const valueDate = new Date().toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    }).replace(/\//g, '-');

    const [selectedDate, setSelectedDate] = useState(valueDate);

    function callLocationAndSelectCountryNewFill(data) {
        if (data && data.country) {
            const country = countries.find(item => item.value === data.country);
            if (country) {
                setCountryId(country.custom_country_value);
                setCountryName(country.value);
                setPhoneCodeCountry(country.value)
                setPhoneCode(country.custom_dial_code);
            }
            setLocation(JSON.stringify(data));
        }
    }

    const router = useRouter();

    const countries = CountriesConstant;

    const [countryId, setCountryId] = useState('');
    const [countryName, setCountryName] = useState('');

    const handleCountryChange = (event) => {

        const selectedValue = event.target.value;
        const selectedCountry = countries.find(country => country.value === selectedValue);
        if (selectedCountry) {
            // setCountryId(selectedCountry.custom_country_value);
            setPhoneCodeCountry(selectedCountry.value);
            setPhoneCode(selectedCountry.custom_dial_code);
        }
    };

    const ORIGIN_URL = 'https://enroll.internationalschooling.org';

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneCode, setPhoneCode] = useState('');
    const [message, setMessage] = useState('');
    const [grade, setGrade] = useState('');
    const [standardId, setStandardId] = useState('');

    useEffect(() => {
        setCookie('us', urlParam('utm_source'));
        setCookie('um', urlParam('utm_medium'));
        setCookie('uc', urlParam('utm_content'));
        setCookie('gclid', urlParam('gclid'));
        setCookie('ucam', urlParam('utm_campaign'));
        setCookie('ut', urlParam('utm_term'));
        setCookie('cu', window.location.href);
    }, []);

    function generateRequest() {
        const requestDemoDTO = {
            name: toTitleCase(firstName),
            lastName: toTitleCase(lastName),
            parentEmail: email,
            requestCallFrom: "DEMO",
            isdCode: phoneCode,
            contactNumber: phone,
            demoCode: '',
            timeZone: timezone,
            studentTimeZone: studentTimeZone,
            meetingDate: selectedSlot.meetingDate,
            meetingSlotId: selectedSlot.id,
            meetingSlotTime: selectedSlot.startTime + "-" + selectedSlot.endTime,
            moduleName: "BOOKMEETING_NEW",
            grade: grade,
            standardId: standardId,
            countryId: countryId,
            countryName: countryName,
            description: escapeCharacters(message),
            location: location,
            campaignName: folderName,
            schoolId: 1,
            utmSource: getCookie('us'),
            utmMedium: getCookie('um'),
            utmDescription: getCookie('uc'),
            originalUrl: getCookie('cu'),
            gclid: getCookie('gclid'),
            utmCampaign: getCookie('ucam') === 'Test' ? folderName : getCookie('ucam'),
            utmTerm: getCookie('ut')
        }
        return requestDemoDTO;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        //const url = 'http://localhost:9090/lead-api/api/v1/common/reqeust-demo-content';
        const url = 'https://sm.internationalschooling.org/api/v1/common/reqeust-demo-content';
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(generateRequest())
            });

            const result = await response.json();
            debugger
            if (result.status === '0' || result.status === '2') {
                console.error('Server error:', result.message);
            } else {
                let redirectUrl = '';
                let payload = '';
                if (result.name) payload += `?dn=${base64Encode(result.name)}`;
                if (result.email) payload += `&de=${base64Encode(result.email)}`;
                if (result.country) payload += `&dc=${base64Encode(result.country)}`;
                if (result.type) payload += `&t=${base64Encode(result.type)}`
                if (result.schoolPersonId) payload += `&spId=${base64Encode(result.schoolPersonId)}`
                if (result.meetingId) payload += `&mId=${base64Encode(result.meetingId)}`
                if (result.timeZone) payload += `&tz=${base64Encode(result.timeZone)}`
                if (result.eventId) payload += `&eId=${base64Encode(result.eventId)}`
                if (result.startDate) payload += `&sd=${base64Encode(result.startDate)}`
                if (result.endDate) payload += `&ed=${base64Encode(result.endDate)}`

                redirectUrl = `${ORIGIN_URL}/is-thankyou${payload}`;
                if (folderName === 'brochure') {
                    redirectUrl = `${ORIGIN_URL}/brochure-thankyou/${payload}`;
                }
                router.replace(redirectUrl);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleInputChange = (event, setState) => {
        setState(event.target.value);
    };

    const handleSelectDateChange = async (e) => {
        setSelectedDate(e.target.value);
    }

    useEffect(() => {
        const fetchFreeSlots = async () => {
            //const url = 'http://localhost:9090/lead-api/api/v1/common/free-slots-list';
            const url = "https://sm.internationalschooling.org/api/v1/common/free-slots-list";
            const payload = {
                book: "Y",
                countryTimezoneId: timezone,
                date: selectedDate,
                lat: lat,
                lon: lon,
                resStatus: "fresh",
                requestType: "REQUESTDEMO",
                schoolId: 1
            };

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                const data = await response.json();
                const slotsData = data.requestDemoFreeSlotsDTO || [];
                setSlots(slotsData);
                if (slotsData.length > 0) {
                    setSelectedSlot(slotsData[0]);
                }
            } catch (error) {
                console.error('Error fetching slots:', error);
            }
        };
        if (selectedDate) {
            fetchFreeSlots();
        }
    }, [selectedDate])

    const [slots, setSlots] = useState([]);

    const handleGradeChange = (event) => {
        const selectedValue = event.target.value;
        setGrade(selectedValue);
        const selectedGrade = grades.find((grade) => grade.value === selectedValue);
        if (selectedGrade) {
            setStandardId(selectedGrade.value);
            setGrade(selectedGrade.label);
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
        { value: "7", label: "Grade 12" }
    ];

    return (
        <div className='w-full border bg-gray-50 rounded-xl border-gray-100 shadow px-4 py-6'>
            <form className='grid grid-cols-1 gap-3' onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-2'>
                    <div className='mb-2 md:mb-0 '>
                        <label className="block mb-1 text-sm font-medium text-gray-900 ">
                            First Name <sup>*</sup>
                        </label>
                        <input
                            name="firstName"
                            id="firstName"
                            required
                            value={firstName}
                            onChange={(e) => handleInputChange(e, setFirstName)}
                            placeholder="Child First Name"
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
                            placeholder="Child Last Name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                        />
                    </div>
                </div>

                {/* <div className='w-full'>
                    <label htmlFor="dob" className="mb-1 text-sm font-medium text-gray-900 ">
                        Child Date of Birth <sup>*</sup>
                    </label>
                    <input
                        name="dob"
                        required
                        onChange={(e) => handleInputChange(e, setDob)}
                        id="dob"
                        type='date'
                        className="bg-gray-50 uppercase border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 w-full p-2.5 "
                    />
                </div> */}



                <div>
                    <label htmlFor="grade" className="block mb-1 text-sm font-medium text-gray-900 ">
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
                        <option value="" disabled defaultChecked>Select Child Grade</option>
                        {grades.map((grade, index) => (
                            <option key={index} value={grade.value}>{grade.label}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900 ">
                        Email <sup>*</sup>
                    </label>
                    <input
                        autoComplete="current-username"
                        name="email"
                        id="email"
                        required
                        type='email'
                        value={email}
                        onChange={(e) => handleInputChange(e, setEmail)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                        placeholder="Father/Mother Email"
                    />
                </div>





                <div className="w-full grid grid-cols-3 gap-1">
                    <div>
                        <label htmlFor="phoneCode" className="block mb-1 text-sm font-medium text-gray-900 ">
                            Phone Code <sup>*</sup>
                        </label>
                        <select
                            id="phoneCode"
                            name="phoneCode"
                            required
                            value={phoneCodeCountry}
                            onChange={handleCountryChange}
                            className="bg-gray-50 border px-4 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5  custom-select appearance-none bg-no-repeat"
                        >
                            <option value="" disabled defaultChecked>Select Code</option>
                            {countries.map((item, index) => (
                                <option key={index} value={item.value}>{item.value} &#40;{item.custom_dial_code}&#41;</option>
                            ))}
                        </select>
                    </div>
                    <div className='col-span-2'>
                        <label htmlFor="phone" className="mb-1 text-sm font-medium text-gray-900 ">
                            Phone Number <sup>*</sup>
                        </label>
                        <input
                            name="phone"
                            required
                            id="phone"
                            value={phone}
                            onChange={(e) => handleInputChange(e, setPhone)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 w-full p-2.5 "
                            placeholder="Father/Mother Phone"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="phoneCode" className="block mb-1 text-sm font-medium text-gray-900 ">
                        Country <sup>*</sup>
                    </label>
                    <select
                        id="country"
                        name="country"
                        value={countryName}
                        required
                        onChange={(e) => {
                            const selectedValue = e.target.value;
                            const selectedCountry = countries.find(country => country.value === selectedValue);
                            if (selectedCountry) {
                                setCountryId(selectedCountry.custom_country_value);
                                setCountryName(selectedCountry.value);
                            }

                            setCountryName(e.target.value);

                        }}
                        className="bg-gray-50 border px-4 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5  custom-select appearance-none bg-no-repeat"
                    >
                        <option value="" disabled defaultChecked>Select Code</option>
                        {countries.map((item, index) => (
                            <option key={index} value={item.value}>{item.value}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="phoneCode" className="block mb-1 text-sm font-medium text-gray-900 ">
                        Select a date for demo. <sup>*</sup>
                    </label>
                    <select value={selectedDate} onChange={(e) => {
                        handleSelectDateChange(e)
                    }} className="bg-gray-50 border px-4 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5  custom-select appearance-none bg-no-repeat" id="chooseDate" name="chooseDate" tabIndex="10" data-gtm-form-interact-field-id="0">
                        {fiveDays.map(date => (
                            <option key={date.value} value={date.value}>{date.label}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-900">
                        Select time for Demo*
                    </label>
                    <div className='h-[220px] overflow-y-auto'>

                        {slots.length > 0 ?
                            <>
                                {slots.map((slot) => (
                                    <div key={slot.id} className="mb-2 py-2 px-2 md:px-4 rounded-lg border ">
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                name={"timeSlot"}
                                                value={slot.id}
                                                checked={selectedSlot && selectedSlot.id === slot.id}
                                                onChange={handleSlotChange}
                                                className="mr-2"
                                            />
                                            {`${slot.meetingDate.trim()} ${slot.startTime} - ${slot.endTime}`}
                                        </label>
                                    </div>
                                ))
                                }
                            </>
                            :
                            <div className='w-full h-full flex items-center justify-center'>
                                <p>No Slot for today</p>
                            </div>
                        }

                    </div>
                </div>


                <div>
                    <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-900 ">
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

                <button type="submit" className="w-full text-white bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default DemoForm;
