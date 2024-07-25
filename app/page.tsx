import { Container, Filters, Title, TopBar } from "@/components/shared";
import { ProductGroupList } from "@/components/shared/products-group-list";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[80px]">
          {/*Фильтрация*/}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/*Список товаров*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "Чизбергер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    price: 200,
                    items: [{ price: 200 }],
                  },
                  {
                    id: 2,
                    name: "Чизбергер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    price: 200,
                    items: [{ price: 200 }],
                  },
                  {
                    id: 3,
                    name: "Чизбергер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    price: 200,
                    items: [{ price: 200 }],
                  },
                  {
                    id: 4,
                    name: "Чизбергер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    price: 200,
                    items: [{ price: 200 }],
                  },
                  {
                    id: 5,
                    name: "Чизбергер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    price: 200,
                    items: [{ price: 200 }],
                  },
                  {
                    id: 6,
                    name: "Чизбергер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    price: 200,
                    items: [{ price: 200 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductGroupList
                title="Комбо"
                items={[
                  {
                    id: 1,
                    name: "Чизбергер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.avif",
                    price: 200,
                    items: [{ price: 200 }],
                  },
                  {
                    id: 2,
                    name: "Чизбергер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.avif",
                    price: 200,
                    items: [{ price: 200 }],
                  },
                  {
                    id: 3,
                    name: "Чизбергер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.avif",
                    price: 200,
                    items: [{ price: 200 }],
                  },
                  {
                    id: 4,
                    name: "Чизбергер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.avif",
                    price: 200,
                    items: [{ price: 200 }],
                  },
                  {
                    id: 5,
                    name: "Чизбергер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.avif",
                    price: 200,
                    items: [{ price: 200 }],
                  },
                  {
                    id: 6,
                    name: "Чизбергер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.avif",
                    price: 200,
                    items: [{ price: 200 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
