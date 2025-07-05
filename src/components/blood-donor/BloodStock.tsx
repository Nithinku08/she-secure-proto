import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Droplets, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

type BloodGroup = "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
type BloodComponent = "Whole Blood" | "Single Donor Platelets" | "Plasma";

interface BloodStock {
  [key: string]: {
    [key in BloodGroup]?: number;
  };
}

interface BloodBank {
  id: number;
  name: string;
  category: string;
  address: string;
  contact: string;
  lastUpdated: string;
  stock: BloodStock;
}

// Static blood bank data
const bloodBanks: BloodBank[] = [
  // Andhra Pradesh
  {
    id: 1,
    name: "Government General Hospital Blood Bank",
    category: "Government",
    address: "Maharanipeta, Visakhapatnam, Andhra Pradesh",
    contact: "0891-2564892",
    lastUpdated: "2024-03-20 10:30 AM",
    stock: {
      "Whole Blood": {
        "A+": 25, "A-": 8, "B+": 30, "B-": 5,
        "AB+": 12, "AB-": 4, "O+": 35, "O-": 10
      },
      "Single Donor Platelets": {
        "A+": 5, "B+": 4, "O+": 8
      },
      "Plasma": {
        "A+": 15, "B+": 12, "AB+": 6, "O+": 18
      }
    }
  },
  {
    id: 3,
    name: "SVIMS Blood Bank",
    category: "Government",
    address: "Alipiri Road, Tirupati, Andhra Pradesh",
    contact: "0877-2287777",
    lastUpdated: "2024-03-20 09:45 AM",
    stock: {
      "Whole Blood": {
        "A+": 22, "A-": 7, "B+": 28, "B-": 6,
        "AB+": 10, "AB-": 4, "O+": 32, "O-": 9
      },
      "Single Donor Platelets": {
        "A+": 6, "B+": 5, "O+": 7
      },
      "Plasma": {
        "A+": 14, "B+": 11, "AB+": 7, "O+": 16
      }
    }
  },

  // Assam
  {
    id: 4,
    name: "Gauhati Medical College Blood Bank",
    category: "Government",
    address: "Narakasur Hill, Guwahati, Assam",
    contact: "0361-2529457",
    lastUpdated: "2024-03-20 10:00 AM",
    stock: {
      "Whole Blood": {
        "A+": 18, "A-": 5, "B+": 22, "B-": 4,
        "AB+": 8, "AB-": 3, "O+": 25, "O-": 7
      },
      "Single Donor Platelets": {
        "A+": 4, "B+": 3, "O+": 5
      },
      "Plasma": {
        "A+": 10, "B+": 8, "AB+": 4, "O+": 12
      }
    }
  },
  {
    id: 5,
    name: "Assam Medical College Blood Bank",
    category: "Government",
    address: "Dibrugarh, Assam",
    contact: "0373-2300080",
    lastUpdated: "2024-03-20 11:30 AM",
    stock: {
      "Whole Blood": {
        "A+": 20, "A-": 6, "B+": 24, "B-": 5,
        "AB+": 9, "AB-": 3, "O+": 28, "O-": 8
      },
      "Single Donor Platelets": {
        "A+": 5, "B+": 4, "O+": 6
      },
      "Plasma": {
        "A+": 12, "B+": 10, "AB+": 5, "O+": 14
      }
    }
  },
  {
    id: 6,
    name: "Silchar Medical College Blood Bank",
    category: "Government",
    address: "Ghungoor, Silchar, Assam",
    contact: "03842-240179",
    lastUpdated: "2024-03-20 09:15 AM",
    stock: {
      "Whole Blood": {
        "A+": 15, "A-": 4, "B+": 20, "B-": 3,
        "AB+": 7, "AB-": 2, "O+": 22, "O-": 6
      },
      "Single Donor Platelets": {
        "A+": 3, "B+": 2, "O+": 4
      },
      "Plasma": {
        "A+": 8, "B+": 7, "AB+": 3, "O+": 10
      }
    }
  },

  // Gujarat
  {
    id: 7,
    name: "Civil Hospital Blood Bank",
    category: "Government",
    address: "Asarwa, Ahmedabad, Gujarat",
    contact: "079-22683721",
    lastUpdated: "2024-03-20 10:45 AM",
    stock: {
      "Whole Blood": {
        "A+": 30, "A-": 10, "B+": 35, "B-": 8,
        "AB+": 15, "AB-": 5, "O+": 40, "O-": 12
      },
      "Single Donor Platelets": {
        "A+": 8, "B+": 6, "O+": 10
      },
      "Plasma": {
        "A+": 20, "B+": 15, "AB+": 8, "O+": 25
      }
    }
  },
  {
    id: 8,
    name: "Prathama Blood Center",
    category: "NGO",
    address: "Vasna, Ahmedabad, Gujarat",
    contact: "079-26821200",
    lastUpdated: "2024-03-20 11:00 AM",
    stock: {
      "Whole Blood": {
        "A+": 25, "A-": 8, "B+": 30, "B-": 6,
        "AB+": 12, "AB-": 4, "O+": 35, "O-": 10
      },
      "Single Donor Platelets": {
        "A+": 6, "B+": 5, "O+": 8
      },
      "Plasma": {
        "A+": 15, "B+": 12, "AB+": 6, "O+": 20
      }
    }
  },
  {
    id: 9,
    name: "SSG Hospital Blood Bank",
    category: "Government",
    address: "Raopura, Vadodara, Gujarat",
    contact: "0265-2423050",
    lastUpdated: "2024-03-20 09:30 AM",
    stock: {
      "Whole Blood": {
        "A+": 22, "A-": 7, "B+": 28, "B-": 5,
        "AB+": 10, "AB-": 3, "O+": 32, "O-": 9
      },
      "Single Donor Platelets": {
        "A+": 5, "B+": 4, "O+": 7
      },
      "Plasma": {
        "A+": 14, "B+": 11, "AB+": 5, "O+": 18
      }
    }
  },

  // Karnataka
  {
    id: 10,
    name: "Victoria Hospital Blood Bank",
    category: "Government",
    address: "K.R. Market, Bangalore, Karnataka",
    contact: "080-26701150",
    lastUpdated: "2024-03-20 10:15 AM",
    stock: {
      "Whole Blood": {
        "A+": 28, "A-": 9, "B+": 32, "B-": 7,
        "AB+": 14, "AB-": 5, "O+": 38, "O-": 11
      },
      "Single Donor Platelets": {
        "A+": 7, "B+": 6, "O+": 9
      },
      "Plasma": {
        "A+": 18, "B+": 14, "AB+": 7, "O+": 22
      }
    }
  },
  {
    id: 11,
    name: "Manipal Hospital Blood Bank",
    category: "Private",
    address: "HAL Airport Road, Bangalore, Karnataka",
    contact: "080-25024444",
    lastUpdated: "2024-03-20 11:45 AM",
    stock: {
      "Whole Blood": {
        "A+": 24, "A-": 8, "B+": 28, "B-": 6,
        "AB+": 11, "AB-": 4, "O+": 34, "O-": 10
      },
      "Single Donor Platelets": {
        "A+": 6, "B+": 5, "O+": 8
      },
      "Plasma": {
        "A+": 16, "B+": 13, "AB+": 6, "O+": 20
      }
    }
  },
  {
    id: 12,
    name: "KMC Hospital Blood Bank",
    category: "Private",
    address: "Ambedkar Circle, Mangalore, Karnataka",
    contact: "0824-2238795",
    lastUpdated: "2024-03-20 09:00 AM",
    stock: {
      "Whole Blood": {
        "A+": 20, "A-": 6, "B+": 25, "B-": 5,
        "AB+": 9, "AB-": 3, "O+": 30, "O-": 8
      },
      "Single Donor Platelets": {
        "A+": 5, "B+": 4, "O+": 6
      },
      "Plasma": {
        "A+": 12, "B+": 10, "AB+": 5, "O+": 15
      }
    }
  },

  // Maharashtra
  {
    id: 13,
    name: "KEM Hospital Blood Bank",
    category: "Government",
    address: "Parel, Mumbai, Maharashtra",
    contact: "022-24107000",
    lastUpdated: "2024-03-20 10:20 AM",
    stock: {
      "Whole Blood": {
        "A+": 35, "A-": 12, "B+": 40, "B-": 10,
        "AB+": 18, "AB-": 6, "O+": 45, "O-": 15
      },
      "Single Donor Platelets": {
        "A+": 10, "B+": 8, "O+": 12
      },
      "Plasma": {
        "A+": 25, "B+": 20, "AB+": 10, "O+": 30
      }
    }
  },
  {
    id: 14,
    name: "Tata Memorial Hospital Blood Bank",
    category: "Government",
    address: "Dr. E Borges Road, Parel, Mumbai, Maharashtra",
    contact: "022-24177000",
    lastUpdated: "2024-03-20 11:20 AM",
    stock: {
      "Whole Blood": {
        "A+": 30, "A-": 10, "B+": 35, "B-": 8,
        "AB+": 15, "AB-": 5, "O+": 40, "O-": 12
      },
      "Single Donor Platelets": {
        "A+": 8, "B+": 6, "O+": 10
      },
      "Plasma": {
        "A+": 20, "B+": 15, "AB+": 8, "O+": 25
      }
    }
  },
  {
    id: 15,
    name: "Sassoon General Hospital Blood Bank",
    category: "Government",
    address: "Pune-Solapur Road, Pune, Maharashtra",
    contact: "020-26128000",
    lastUpdated: "2024-03-20 09:45 AM",
    stock: {
      "Whole Blood": {
        "A+": 25, "A-": 8, "B+": 30, "B-": 7,
        "AB+": 12, "AB-": 4, "O+": 35, "O-": 10
      },
      "Single Donor Platelets": {
        "A+": 6, "B+": 5, "O+": 8
      },
      "Plasma": {
        "A+": 15, "B+": 12, "AB+": 6, "O+": 20
      }
    }
  },

  // Tamil Nadu
  {
    id: 16,
    name: "Rajiv Gandhi Government Hospital Blood Bank",
    category: "Government",
    address: "EVR Periyar Salai, Chennai, Tamil Nadu",
    contact: "044-25305000",
    lastUpdated: "2024-03-20 10:30 AM",
    stock: {
      "Whole Blood": {
        "A+": 32, "A-": 10, "B+": 38, "B-": 9,
        "AB+": 16, "AB-": 5, "O+": 42, "O-": 14
      },
      "Single Donor Platelets": {
        "A+": 8, "B+": 7, "O+": 10
      },
      "Plasma": {
        "A+": 22, "B+": 18, "AB+": 9, "O+": 26
      }
    }
  },
  {
    id: 17,
    name: "Apollo Hospital Blood Bank",
    category: "Private",
    address: "Greams Road, Chennai, Tamil Nadu",
    contact: "044-28290200",
    lastUpdated: "2024-03-20 11:15 AM",
    stock: {
      "Whole Blood": {
        "A+": 28, "A-": 9, "B+": 34, "B-": 8,
        "AB+": 14, "AB-": 4, "O+": 38, "O-": 12
      },
      "Single Donor Platelets": {
        "A+": 7, "B+": 6, "O+": 9
      },
      "Plasma": {
        "A+": 18, "B+": 15, "AB+": 8, "O+": 22
      }
    }
  },
  {
    id: 18,
    name: "Madurai Medical College Blood Bank",
    category: "Government",
    address: "Panagal Road, Madurai, Tamil Nadu",
    contact: "0452-2532535",
    lastUpdated: "2024-03-20 09:30 AM",
    stock: {
      "Whole Blood": {
        "A+": 24, "A-": 7, "B+": 30, "B-": 6,
        "AB+": 11, "AB-": 3, "O+": 34, "O-": 10
      },
      "Single Donor Platelets": {
        "A+": 5, "B+": 4, "O+": 7
      },
      "Plasma": {
        "A+": 14, "B+": 12, "AB+": 6, "O+": 18
      }
    }
  },

  // Delhi
  {
    id: 20,
    name: "Safdarjung Hospital Blood Bank",
    category: "Government",
    address: "Ansari Nagar West, New Delhi",
    contact: "011-26707444",
    lastUpdated: "2024-03-20 11:30 AM",
    stock: {
      "Whole Blood": {
        "A+": 35, "A-": 12, "B+": 40, "B-": 10,
        "AB+": 18, "AB-": 6, "O+": 45, "O-": 15
      },
      "Single Donor Platelets": {
        "A+": 10, "B+": 8, "O+": 12
      },
      "Plasma": {
        "A+": 25, "B+": 20, "AB+": 10, "O+": 30
      }
    }
  },
  {
    id: 21,
    name: "GTB Hospital Blood Bank",
    category: "Government",
    address: "Dilshad Garden, Delhi",
    contact: "011-22586262",
    lastUpdated: "2024-03-20 09:15 AM",
    stock: {
      "Whole Blood": {
        "A+": 30, "A-": 10, "B+": 35, "B-": 8,
        "AB+": 15, "AB-": 5, "O+": 40, "O-": 12
      },
      "Single Donor Platelets": {
        "A+": 8, "B+": 6, "O+": 10
      },
      "Plasma": {
        "A+": 20, "B+": 15, "AB+": 8, "O+": 25
      }
    }
  },

  // Kerala
  {
    id: 22,
    name: "Medical College Hospital Blood Bank",
    category: "Government",
    address: "Medical College Road, Thiruvananthapuram, Kerala",
    contact: "0471-2528386",
    lastUpdated: "2024-03-20 10:15 AM",
    stock: {
      "Whole Blood": {
        "A+": 28, "A-": 9, "B+": 32, "B-": 7,
        "AB+": 14, "AB-": 4, "O+": 36, "O-": 11
      },
      "Single Donor Platelets": {
        "A+": 7, "B+": 6, "O+": 9
      },
      "Plasma": {
        "A+": 18, "B+": 15, "AB+": 7, "O+": 22
      }
    }
  },
  {
    id: 23,
    name: "Calicut Medical College Blood Bank",
    category: "Government",
    address: "Medical College Road, Kozhikode, Kerala",
    contact: "0495-2350216",
    lastUpdated: "2024-03-20 11:00 AM",
    stock: {
      "Whole Blood": {
        "A+": 25, "A-": 8, "B+": 30, "B-": 6,
        "AB+": 12, "AB-": 3, "O+": 34, "O-": 10
      },
      "Single Donor Platelets": {
        "A+": 6, "B+": 5, "O+": 8
      },
      "Plasma": {
        "A+": 16, "B+": 13, "AB+": 6, "O+": 20
      }
    }
  },
  {
    id: 24,
    name: "KIMS Hospital Blood Bank",
    category: "Private",
    address: "Anayara P.O., Thiruvananthapuram, Kerala",
    contact: "0471-2447575",
    lastUpdated: "2024-03-20 09:30 AM",
    stock: {
      "Whole Blood": {
        "A+": 22, "A-": 7, "B+": 26, "B-": 5,
        "AB+": 10, "AB-": 3, "O+": 30, "O-": 8
      },
      "Single Donor Platelets": {
        "A+": 5, "B+": 4, "O+": 7
      },
      "Plasma": {
        "A+": 14, "B+": 11, "AB+": 5, "O+": 18
      }
    }
  },

  // West Bengal
  {
    id: 25,
    name: "SSKM Hospital Blood Bank",
    category: "Government",
    address: "244, AJC Bose Road, Kolkata, West Bengal",
    contact: "033-22041100",
    lastUpdated: "2024-03-20 10:45 AM",
    stock: {
      "Whole Blood": {
        "A+": 32, "A-": 10, "B+": 38, "B-": 8,
        "AB+": 15, "AB-": 5, "O+": 42, "O-": 13
      },
      "Single Donor Platelets": {
        "A+": 8, "B+": 7, "O+": 10
      },
      "Plasma": {
        "A+": 20, "B+": 18, "AB+": 8, "O+": 25
      }
    }
  },
  {
    id: 26,
    name: "Medical College Blood Bank",
    category: "Government",
    address: "88, College Street, Kolkata, West Bengal",
    contact: "033-22123456",
    lastUpdated: "2024-03-20 11:30 AM",
    stock: {
      "Whole Blood": {
        "A+": 28, "A-": 9, "B+": 34, "B-": 7,
        "AB+": 13, "AB-": 4, "O+": 38, "O-": 11
      },
      "Single Donor Platelets": {
        "A+": 7, "B+": 6, "O+": 9
      },
      "Plasma": {
        "A+": 18, "B+": 15, "AB+": 7, "O+": 22
      }
    }
  },
  {
    id: 27,
    name: "North Bengal Medical College Blood Bank",
    category: "Government",
    address: "Sushrutanagar, Siliguri, West Bengal",
    contact: "0353-2585483",
    lastUpdated: "2024-03-20 09:15 AM",
    stock: {
      "Whole Blood": {
        "A+": 24, "A-": 7, "B+": 30, "B-": 6,
        "AB+": 11, "AB-": 3, "O+": 34, "O-": 9
      },
      "Single Donor Platelets": {
        "A+": 5, "B+": 4, "O+": 7
      },
      "Plasma": {
        "A+": 15, "B+": 12, "AB+": 6, "O+": 20
      }
    }
  },

  // Punjab
  {
    id: 28,
    name: "Government Medical College Blood Bank",
    category: "Government",
    address: "Circular Road, Amritsar, Punjab",
    contact: "0183-2426918",
    lastUpdated: "2024-03-20 10:00 AM",
    stock: {
      "Whole Blood": {
        "A+": 26, "A-": 8, "B+": 32, "B-": 7,
        "AB+": 12, "AB-": 4, "O+": 36, "O-": 10
      },
      "Single Donor Platelets": {
        "A+": 6, "B+": 5, "O+": 8
      },
      "Plasma": {
        "A+": 16, "B+": 14, "AB+": 7, "O+": 20
      }
    }
  },
  {
    id: 29,
    name: "DMC Blood Bank",
    category: "Private",
    address: "Civil Lines, Ludhiana, Punjab",
    contact: "0161-4687700",
    lastUpdated: "2024-03-20 11:15 AM",
    stock: {
      "Whole Blood": {
        "A+": 24, "A-": 7, "B+": 28, "B-": 6,
        "AB+": 10, "AB-": 3, "O+": 32, "O-": 9
      },
      "Single Donor Platelets": {
        "A+": 5, "B+": 4, "O+": 7
      },
      "Plasma": {
        "A+": 14, "B+": 12, "AB+": 5, "O+": 18
      }
    }
  },
  {
    id: 30,
    name: "Government Medical College Blood Bank",
    category: "Government",
    address: "Medical Enclave, Patiala, Punjab",
    contact: "0175-2212018",
    lastUpdated: "2024-03-20 09:45 AM",
    stock: {
      "Whole Blood": {
        "A+": 22, "A-": 6, "B+": 26, "B-": 5,
        "AB+": 9, "AB-": 3, "O+": 30, "O-": 8
      },
      "Single Donor Platelets": {
        "A+": 4, "B+": 3, "O+": 6
      },
      "Plasma": {
        "A+": 12, "B+": 10, "AB+": 4, "O+": 16
      }
    }
  },

  // Rajasthan
  {
    id: 31,
    name: "SMS Medical College Blood Bank",
    category: "Government",
    address: "JLN Marg, Jaipur, Rajasthan",
    contact: "0141-2518380",
    lastUpdated: "2024-03-20 10:30 AM",
    stock: {
      "Whole Blood": {
        "A+": 30, "A-": 9, "B+": 35, "B-": 8,
        "AB+": 14, "AB-": 4, "O+": 40, "O-": 12
      },
      "Single Donor Platelets": {
        "A+": 7, "B+": 6, "O+": 9
      },
      "Plasma": {
        "A+": 18, "B+": 15, "AB+": 7, "O+": 22
      }
    }
  },
  {
    id: 32,
    name: "MDM Hospital Blood Bank",
    category: "Government",
    address: "Dr. Sampurnanand Medical College, Jodhpur, Rajasthan",
    contact: "0291-2434374",
    lastUpdated: "2024-03-20 11:00 AM",
    stock: {
      "Whole Blood": {
        "A+": 25, "A-": 7, "B+": 30, "B-": 6,
        "AB+": 11, "AB-": 3, "O+": 35, "O-": 10
      },
      "Single Donor Platelets": {
        "A+": 5, "B+": 4, "O+": 7
      },
      "Plasma": {
        "A+": 15, "B+": 12, "AB+": 6, "O+": 18
      }
    }
  },
  {
    id: 33,
    name: "RNT Medical College Blood Bank",
    category: "Government",
    address: "Court Chowk, Udaipur, Rajasthan",
    contact: "0294-2528811",
    lastUpdated: "2024-03-20 09:30 AM",
    stock: {
      "Whole Blood": {
        "A+": 22, "A-": 6, "B+": 28, "B-": 5,
        "AB+": 10, "AB-": 3, "O+": 32, "O-": 9
      },
      "Single Donor Platelets": {
        "A+": 4, "B+": 3, "O+": 6
      },
      "Plasma": {
        "A+": 13, "B+": 11, "AB+": 5, "O+": 16
      }
    }
  },

  // Uttar Pradesh
  {
    id: 34,
    name: "KGMU Blood Bank",
    category: "Government",
    address: "Shah Mina Road, Lucknow, Uttar Pradesh",
    contact: "0522-2257450",
    lastUpdated: "2024-03-20 10:15 AM",
    stock: {
      "Whole Blood": {
        "A+": 35, "A-": 11, "B+": 40, "B-": 9,
        "AB+": 16, "AB-": 5, "O+": 45, "O-": 14
      },
      "Single Donor Platelets": {
        "A+": 9, "B+": 8, "O+": 11
      },
      "Plasma": {
        "A+": 22, "B+": 18, "AB+": 9, "O+": 26
      }
    }
  },
  {
    id: 35,
    name: "IMS BHU Blood Bank",
    category: "Government",
    address: "Lanka, Varanasi, Uttar Pradesh",
    contact: "0542-2369341",
    lastUpdated: "2024-03-20 11:30 AM",
    stock: {
      "Whole Blood": {
        "A+": 30, "A-": 9, "B+": 35, "B-": 8,
        "AB+": 14, "AB-": 4, "O+": 40, "O-": 12
      },
      "Single Donor Platelets": {
        "A+": 7, "B+": 6, "O+": 9
      },
      "Plasma": {
        "A+": 18, "B+": 15, "AB+": 7, "O+": 22
      }
    }
  },
  {
    id: 36,
    name: "SNMC Blood Bank",
    category: "Government",
    address: "Medical College, Agra, Uttar Pradesh",
    contact: "0562-2520021",
    lastUpdated: "2024-03-20 09:45 AM",
    stock: {
      "Whole Blood": {
        "A+": 26, "A-": 8, "B+": 32, "B-": 7,
        "AB+": 12, "AB-": 3, "O+": 36, "O-": 10
      },
      "Single Donor Platelets": {
        "A+": 6, "B+": 5, "O+": 8
      },
      "Plasma": {
        "A+": 16, "B+": 13, "AB+": 6, "O+": 20
      }
    }
  },

  // Bihar
  {
    id: 37,
    name: "PMCH Blood Bank",
    category: "Government",
    address: "Ashok Rajpath, Patna, Bihar",
    contact: "0612-2300343",
    lastUpdated: "2024-03-20 10:00 AM",
    stock: {
      "Whole Blood": {
        "A+": 28, "A-": 8, "B+": 34, "B-": 7,
        "AB+": 13, "AB-": 4, "O+": 38, "O-": 11
      },
      "Single Donor Platelets": {
        "A+": 7, "B+": 6, "O+": 9
      },
      "Plasma": {
        "A+": 18, "B+": 15, "AB+": 7, "O+": 22
      }
    }
  },
  {
    id: 38,
    name: "DMCH Blood Bank",
    category: "Government",
    address: "DMCH Road, Darbhanga, Bihar",
    contact: "06272-233092",
    lastUpdated: "2024-03-20 11:15 AM",
    stock: {
      "Whole Blood": {
        "A+": 24, "A-": 7, "B+": 30, "B-": 6,
        "AB+": 11, "AB-": 3, "O+": 34, "O-": 9
      },
      "Single Donor Platelets": {
        "A+": 5, "B+": 4, "O+": 7
      },
      "Plasma": {
        "A+": 15, "B+": 12, "AB+": 5, "O+": 18
      }
    }
  },
  {
    id: 39,
    name: "JLNMCH Blood Bank",
    category: "Government",
    address: "Kankarbagh, Bhagalpur, Bihar",
    contact: "0641-2401078",
    lastUpdated: "2024-03-20 09:30 AM",
    stock: {
      "Whole Blood": {
        "A+": 22, "A-": 6, "B+": 28, "B-": 5,
        "AB+": 10, "AB-": 3, "O+": 32, "O-": 8
      },
      "Single Donor Platelets": {
        "A+": 4, "B+": 3, "O+": 6
      },
      "Plasma": {
        "A+": 13, "B+": 11, "AB+": 5, "O+": 16
      }
    }
  },

  // Madhya Pradesh
  {
    id: 40,
    name: "Gandhi Medical College Blood Bank",
    category: "Government",
    address: "Royal Market, Bhopal, Madhya Pradesh",
    contact: "0755-2540582",
    lastUpdated: "2024-03-20 10:30 AM",
    stock: {
      "Whole Blood": {
        "A+": 30, "A-": 9, "B+": 36, "B-": 8,
        "AB+": 14, "AB-": 4, "O+": 40, "O-": 12
      },
      "Single Donor Platelets": {
        "A+": 8, "B+": 7, "O+": 10
      },
      "Plasma": {
        "A+": 20, "B+": 16, "AB+": 8, "O+": 24
      }
    }
  },
  {
    id: 41,
    name: "MY Hospital Blood Bank",
    category: "Government",
    address: "MY Hospital Campus, Indore, Madhya Pradesh",
    contact: "0731-2438100",
    lastUpdated: "2024-03-20 11:00 AM",
    stock: {
      "Whole Blood": {
        "A+": 28, "A-": 8, "B+": 32, "B-": 7,
        "AB+": 12, "AB-": 3, "O+": 36, "O-": 10
      },
      "Single Donor Platelets": {
        "A+": 6, "B+": 5, "O+": 8
      },
      "Plasma": {
        "A+": 16, "B+": 14, "AB+": 6, "O+": 20
      }
    }
  },
  {
    id: 42,
    name: "NSCB Medical College Blood Bank",
    category: "Government",
    address: "Medical College Campus, Jabalpur, Madhya Pradesh",
    contact: "0761-2370951",
    lastUpdated: "2024-03-20 09:15 AM",
    stock: {
      "Whole Blood": {
        "A+": 24, "A-": 7, "B+": 28, "B-": 6,
        "AB+": 10, "AB-": 3, "O+": 32, "O-": 9
      },
      "Single Donor Platelets": {
        "A+": 5, "B+": 4, "O+": 7
      },
      "Plasma": {
        "A+": 14, "B+": 12, "AB+": 5, "O+": 18
      }
    }
  }
];

const states = [
  "Andhra Pradesh",
  "Assam",
  "Bihar",
  "Gujarat",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Punjab",
  "Rajasthan",
  "Uttar Pradesh",
  "West Bengal"
].sort();

const bloodComponents: BloodComponent[] = ["Whole Blood", "Single Donor Platelets", "Plasma"];
const bloodGroups: BloodGroup[] = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const BloodStock = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedComponent, setSelectedComponent] = useState<BloodComponent>("Whole Blood");
  const [selectedBloodGroup, setSelectedBloodGroup] = useState<BloodGroup | "">("");

  // Filter blood banks based on selected state
  const filteredBloodBanks = bloodBanks.filter(bank => {
    if (!selectedState) return true; // Show all if no state selected
    return bank.address.includes(selectedState);
  });

  return (
    <div className="space-y-6">
      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="text-xl text-red-600 flex items-center gap-2">
            <Droplets className="h-5 w-5" />
            Blood Stock Availability
          </CardTitle>
          <CardDescription>
            Search for blood availability across blood banks in your area
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6 bg-red-50 border-red-200">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-600">
              Blood availability status is updated by blood banks. Please contact the blood bank for confirmation before visiting.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Select value={selectedState} onValueChange={setSelectedState}>
              <SelectTrigger>
                <SelectValue placeholder="Select State" />
              </SelectTrigger>
              <SelectContent>
                {states.map((state) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select 
              value={selectedComponent} 
              onValueChange={(value: BloodComponent) => setSelectedComponent(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Blood Component" />
              </SelectTrigger>
              <SelectContent>
                {bloodComponents.map((component) => (
                  <SelectItem key={component} value={component}>
                    {component}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select 
              value={selectedBloodGroup} 
              onValueChange={(value: BloodGroup | "") => setSelectedBloodGroup(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Blood Group" />
              </SelectTrigger>
              <SelectContent>
                {bloodGroups.map((group) => (
                  <SelectItem key={group} value={group}>
                    {group}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Blood Bank</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Blood Groups Available ({selectedComponent})</TableHead>
                  <TableHead>Last Updated</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBloodBanks.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                      {selectedState ? `No blood banks found in ${selectedState}` : 'Please select a state to view blood banks'}
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredBloodBanks.map((bank) => (
                    <TableRow key={bank.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{bank.name}</div>
                          <div className="text-sm text-gray-500">{bank.address}</div>
                        </div>
                      </TableCell>
                      <TableCell>{bank.category}</TableCell>
                      <TableCell>
                        <a href={`tel:${bank.contact}`} className="text-blue-600 hover:underline">
                          {bank.contact}
                        </a>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-2">
                          {Object.entries(bank.stock[selectedComponent] || {}).map(([group, units]) => (
                            <span
                              key={group}
                              className={`px-2 py-1 rounded text-xs font-medium ${
                                units > 10
                                  ? "bg-green-100 text-green-700"
                                  : units > 5
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-red-100 text-red-700"
                              }`}
                            >
                              {group}: {units} units
                            </span>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-gray-500">
                        {bank.lastUpdated}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BloodStock; 