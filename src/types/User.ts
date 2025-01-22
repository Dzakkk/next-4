export interface UserInterface {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

export const fakeUsers: UserInterface[] = [
    {
        id: 1,
        name: "John Doe",
        email: "johndoe@example.com",
        isActive: true,
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "janesmith@example.com",
        isActive: false,
    },
    {
        id: 3,
        name: "Alice Johnson",
        email: "alicejohnson@example.com",
        isActive: true,
    },
    {
        id: 4,
        name: "Bob Brown",
        email: "bobbrown@example.com",
        isActive: false,
    },
    {
        id: 5,
        name: "Charlie Wilson",
        email: "charliewilson@example.com",
        isActive: true,
    },
    {
        id: 6,
        name: "Emily Davis",
        email: "emilydavis@example.com",
        isActive: true,
    },
    {
        id: 7,
        name: "Frank Harris",
        email: "frankharris@example.com",
        isActive: false,
    },
    {
        id: 8,
        name: "Grace Miller",
        email: "gracemiller@example.com",
        isActive: true,
    },
    {
        id: 9,
        name: "Henry Moore",
        email: "henrymoore@example.com",
        isActive: false,
    },
    {
        id: 10,
        name: "Ivy Taylor",
        email: "ivytaylor@example.com",
        isActive: true,
    },
];
