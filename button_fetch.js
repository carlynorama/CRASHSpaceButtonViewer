let source_url = `https://crashspacela.com/sign/?output=jsonmin`

async function getLatest(callRoute) {
    console.log(callRoute)
    try {
        const response = await fetch(
            callRoute,
            {
                method: 'GET',
            },
        );

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

window.onload = function() {
    console.log('script called')
    getLatest(source_url)
}

