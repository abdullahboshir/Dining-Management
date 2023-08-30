
export const checkIsArray = (data) => {
    if (!data || !Array.isArray(data)) {
        return null;
    };

};


export const findLocation =  (mainData, mainData2, selectedData) => {
    const findMatch =  mainData.data.find(matchfind => matchfind.name === selectedData);
   
    const filterMatch = mainData2?.data?.filter (
        matchfilter => matchfilter?.division_id === findMatch?.id || matchfilter?.district_id === findMatch?.id || matchfilter?.upazilla_id === findMatch?.id
        );
    return filterMatch;
};
