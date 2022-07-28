export const getservice=async (path)=>{

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    const res = await fetch(path, requestOptions);
    return await res.json();
    

}