import { Observable } from "rxjs"
import { IUsers } from "../interfaces/users.interface"

export const Users$ = new Observable<IUsers[]>(value => {
  value.next(Users)
  value.complete()
})

const Users = [
  {
    login: "login0",
    email: "email0@example.com",
    phoneNumber: "+7(999) 000 0000",
    roles: "Moderator",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Active",
    epAvailability: "true"
  },
  {
    login: "login1",
    email: "email1@example.com",
    phoneNumber: "+7(999) 111 1111",
    roles: "Editor",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Inactive",
    epAvailability: "false"
  },
  {
    login: "login2",
    email: "email2@example.com",
    phoneNumber: "+7(999) 222 2222",
    roles: "User",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Active",
    epAvailability: "true"
  },
  {
    login: "login3",
    email: "email3@example.com",
    phoneNumber: "+7(999) 333 3333",
    roles: "Editor",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Inactive",
    epAvailability: "false"
  },
  {
    login: "login4",
    email: "email4@example.com",
    phoneNumber: "+7(999) 444 4444",
    roles: "Moderator",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Active",
    epAvailability: "true"
  },
  {
    login: "login5",
    email: "email5@example.com",
    phoneNumber: "+7(999) 555 5555",
    roles: "Editor",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Inactive",
    epAvailability: "false"
  },
  {
    login: "login6",
    email: "email6@example.com",
    phoneNumber: "+7(999) 666 6666",
    roles: "User",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Active",
    epAvailability: "true"
  },
  {
    login: "login7",
    email: "email7@example.com",
    phoneNumber: "+7(999) 777 7777",
    roles: "Admin",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Inactive",
    epAvailability: "false"
  },
  {
    login: "login8",
    email: "email8@example.com",
    phoneNumber: "+7(999) 888 8888",
    roles: "Moderator",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Active",
    epAvailability: "true"
  },
  {
    login: "login9",
    email: "email9@example.com",
    phoneNumber: "+7(999) 999 9999",
    roles: "Editor",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Inactive",
    epAvailability: "false"
  },
  {
    login: "login10",
    email: "email10@example.com",
    phoneNumber: "+7(999) 101 0101",
    roles: "User",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Active",
    epAvailability: "true"
  },
  {
    login: "login11",
    email: "email11@example.com",
    phoneNumber: "+7(999) 111 1111",
    roles: "Admin",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Inactive",
    epAvailability: "false"
  },
  {
    login: "login12",
    email: "email12@example.com",
    phoneNumber: "+7(999) 222 2222",
    roles: "Moderator",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Active",
    epAvailability: "true"
  },
  {
    login: "login13",
    email: "email13@example.com",
    phoneNumber: "+7(999) 333 3333",
    roles: "Editor",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Inactive",
    epAvailability: "false"
  },
  {
    login: "login14",
    email: "email14@example.com",
    phoneNumber: "+7(999) 444 4444",
    roles: "User",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Active",
    epAvailability: "true"
  },
  {
    login: "login15",
    email: "email15@example.com",
    phoneNumber: "+7(999) 555 5555",
    roles: "Admin",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Inactive",
    epAvailability: "false"
  },
  {
    login: "login16",
    email: "email16@example.com",
    phoneNumber: "+7(999) 666 6666",
    roles: "Moderator",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Active",
    epAvailability: "true"
  },
  {
    login: "login17",
    email: "email17@example.com",
    phoneNumber: "+7(999) 777 7777",
    roles: "Editor",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Inactive",
    epAvailability: "false"
  },
  {
    login: "login18",
    email: "email18@example.com",
    phoneNumber: "+7(999) 888 8888",
    roles: "User",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Active",
    epAvailability: "true"
  },
  {
    login: "login19",
    email: "email19@example.com",
    phoneNumber: "+7(999) 999 9999",
    roles: "Admin",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Inactive",
    epAvailability: "false"
  },
  {
    login: "login20",
    email: "email20@example.com",
    phoneNumber: "+7(999) 101 0101",
    roles: "Moderator",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Active",
    epAvailability: "true"
  },
  {
    login: "login21",
    email: "email21@example.com",
    phoneNumber: "+7(999) 111 1111",
    roles: "Editor",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Inactive",
    epAvailability: "false"
  },
  {
    login: "login22",
    email: "email22@example.com",
    phoneNumber: "+7(999) 222 2222",
    roles: "User",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Active",
    epAvailability: "true"
  },
  {
    login: "login23",
    email: "email23@example.com",
    phoneNumber: "+7(999) 333 3333",
    roles: "Admin",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Inactive",
    epAvailability: "false"
  },
  {
    login: "login24",
    email: "email24@example.com",
    phoneNumber: "+7(999) 444 4444",
    roles: "Moderator",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Active",
    epAvailability: "true"
  },
  {
    login: "login25",
    email: "email25@example.com",
    phoneNumber: "+7(999) 555 5555",
    roles: "Editor",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Inactive",
    epAvailability: "false"
  },
  {
    login: "login26",
    email: "email26@example.com",
    phoneNumber: "+7(999) 666 6666",
    roles: "User",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Active",
    epAvailability: "true"
  },
  {
    login: "login27",
    email: "email27@example.com",
    phoneNumber: "+7(999) 777 7777",
    roles: "Admin",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Inactive",
    epAvailability: "false"
  },
  {
    login: "login28",
    email: "email28@example.com",
    phoneNumber: "+7(999) 888 8888",
    roles: "Moderator",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Active",
    epAvailability: "true"
  },
  {
    login: "login29",
    email: "email29@example.com",
    phoneNumber: "+7(999) 999 9999",
    roles: "Editor",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Inactive",
    epAvailability: "false"
  },
  {
    login: "login30",
    email: "email30@example.com",
    phoneNumber: "+7(999) 101 0101",
    roles: "User",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Active",
    epAvailability: "true"
  },
  {
    login: "login31",
    email: "email31@example.com",
    phoneNumber: "+7(999) 111 1111",
    roles: "Admin",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Inactive",
    epAvailability: "false"
  },
  {
    login: "login32",
    email: "email32@example.com",
    phoneNumber: "+7(999) 222 2222",
    roles: "Moderator",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Active",
    epAvailability: "true"
  },
  {
    login: "login33",
    email: "email33@example.com",
    phoneNumber: "+7(999) 333 3333",
    roles: "Editor",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Inactive",
    epAvailability: "false"
  },
  {
    login: "login34",
    email: "email34@example.com",
    phoneNumber: "+7(999) 444 4444",
    roles: "User",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Active",
    epAvailability: "true"
  },
  {
    login: "login35",
    email: "email35@example.com",
    phoneNumber: "+7(999) 555 5555",
    roles: "Admin",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Inactive",
    epAvailability: "false"
  },
  {
    login: "login36",
    email: "email36@example.com",
    phoneNumber: "+7(999) 666 6666",
    roles: "Moderator",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Active",
    epAvailability: "true"
  },
  {
    login: "login37",
    email: "email37@example.com",
    phoneNumber: "+7(999) 777 7777",
    roles: "Editor",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Inactive",
    epAvailability: "false"
  },
  {
    login: "login38",
    email: "email38@example.com",
    phoneNumber: "+7(999) 888 8888",
    roles: "User",
    editDate: "2023-02-20T14:30:00.000Z",
    createDate: "2023-02-20T14:30:00.000Z",
    status: "Active",
    epAvailability: "true"
  }
]