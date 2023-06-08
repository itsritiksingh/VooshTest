// Example POST method implementation:
export async function addUserApi(url, data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  export async function addOrderApi(url, data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
  
  export async function getOrderApi(url, data = {}) {
    // Default options are marked with *
    const response = await fetch(url+ `?userId=${data}`, {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }
  