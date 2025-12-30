const API_URL = "https://dev.api.bekindnetwork.com/api/v1";

export interface ActionItem {
  id: number | string;
  name: string;
  description?: string;
  [key: string]: any; 
}

export interface ActionsResponse {
  data: ActionItem[];
  totalCount?: number; 
  totalPages?: number;
}

export const actionsApi = {
  getActions: async (token: string, pageNumber: number = 1, pageSize: number = 10): Promise<ActionsResponse> => {
    
    // Construimos la URL con parámetros
    const params = new URLSearchParams({
      pageNumber: pageNumber.toString(),
      pageSize: pageSize.toString(),
    });

    const response = await fetch(`${API_URL}/actions/admin-list?${params}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` // <--- AQUÍ VA EL TOKEN
      },
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: No se pudieron cargar las acciones`);
    }

    const data = await response.json();
    return data;
  },
};