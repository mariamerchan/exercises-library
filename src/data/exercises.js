const data = {
  categories: [
    {
      id: 1,
      name: "Hooks",
      subtopics: [
        {
          id: 1,
          title: "useState",
          summary:
            "Aprende a manejar estado en componentes funcionales usando `useState`.",
          example:
            "Crea un componente que use `useState` para contar los clics en un botón.",
          exercises: [
            {
              id: 1,
              title: "Contador básico",
              description:
                "Crea un componente que cuente los clics de un botón usando `useState`.",
            },
            {
              id: 2,
              title: "Contador con valor inicial",
              description:
                "Extiende el contador anterior para comenzar desde un valor inicial dado.",
            },
          ],
        },
        {
          id: 2,
          title: "useEffect",
          summary:
            "Ejecuta efectos secundarios en tus componentes, como actualizar el título de la página.",
          example:
            "Crea un componente que cambie el título del documento cuando se monta.",
          exercises: [],
        },
        {
          id: 3,
          title: "useRef",
          summary: "Accede a referencias mutables sin disparar renderizados.",
          example:
            "Crea un componente que enfoque un input al hacer clic en un botón usando `useRef`.",
          exercises: [],
        },
        {
          id: 4,
          title: "useReducer",
          summary: "Gestiona estado complejo con acciones y un reducer.",
          example:
            "Crea un componente con un contador controlado por `useReducer` que pueda incrementar y reiniciar.",
          exercises: [],
        },
      ],
    },
    {
      id: 2,
      name: "Estados",
      subtopics: [
        {
          id: 1,
          title: "Estado en componentes de clase",
          summary:
            "Antes de los hooks, el estado se manejaba en componentes de clase.",
          example:
            "Crea un componente de clase que tenga un contador en su estado y un botón para incrementarlo.",
          exercises: [
            {
              id: 1,
              title: "Contador con clase",
              description:
                "Crea un componente de clase que maneje un contador y lo muestre en pantalla.",
            },
          ],
        },
        {
          id: 2,
          title: "Estado global",
          summary:
            "El estado global permite compartir datos entre múltiples componentes.",
          example:
            "Explora herramientas como Context API o Redux para manejar estado compartido.",
          exercises: [],
        },
      ],
    },
    {
      id: 3,
      name: "CSS",
      subtopics: [
        {
          id: 1,
          title: "Estado en componentes de clase",
          summary:
            "Antes de los hooks, el estado se manejaba en componentes de clase.",
          example:
            "Crea un componente de clase que tenga un contador en su estado y un botón para incrementarlo.",
          exercises: [
            {
              id: 1,
              title: "Contador con clase",
              description:
                "Crea un componente de clase que maneje un contador y lo muestre en pantalla.",
            },
          ],
        },
        {
          id: 2,
          title: "Estado global",
          summary:
            "El estado global permite compartir datos entre múltiples componentes.",
          example:
            "Explora herramientas como Context API o Redux para manejar estado compartido.",
          exercises: [],
        },
      ],
    },
  ],
};

export default data;
