
export const checkIsArray = (data) => {
    if (!data || !Array.isArray(data)) {
        return null;
    };

};


export const findLocation = (mainData, mainData2, selectedData) => {
    const findMatch = mainData.data.find(matchfind => matchfind.name === selectedData);

    const filterMatch = mainData2?.data?.filter(
        matchfilter => matchfilter?.division_id === findMatch?.id || matchfilter?.district_id === findMatch?.id || matchfilter?.upazilla_id === findMatch?.id
    );
    return filterMatch;
};



export const checkPasswordStrength = (password) => {

    const minLength = password.length > 8;
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const numbersRegex = /[0-9]/;
    const symbolsRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
  


    if (!minLength) {
        return {status: false, message: 'Must provide minimum 8 Character'};
    } else if (!lowercaseRegex.test(password)) {
        return{status: false, message: 'Must provide a Lower Cas Latter'};
    } else if (!uppercaseRegex.test(password)) {
        return {status: false, message: 'Must provide a Upper Cas Latter'};
    } else if (!numbersRegex.test(password)) {
        return {status: false, message: 'Must provide a Number Cas Latter'};
    } else if (!symbolsRegex.test(password)) {
        return {status: false, message: 'Must provide a Symbol'};
    };


//      // No repeated characters (e.g., "aa" or "11")
//   if (/(\w)\1{2,}/.test(password)) {
//     return 'No repeated characters';
//   }

//   // No sequential characters (e.g., "123" or "abc")
//   if (/123|abc|password/i.test(password)) {
//     return 'No sequential characters';
//   }

    return {status: true};
};
