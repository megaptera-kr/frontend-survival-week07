import Restaurant from '../Types/Restaurant';
import RestautrantRow from './RestautrantRow';

type TableProps = {
    restaurants : Restaurant[]
}

export default function Table({ restaurants }: TableProps) {
  return (
    <table>
      <thead>
        {
          restaurants.map(({ id, name, menu }: Restaurant) => (
            <RestautrantRow
              key={id}
              name={name}
              menu={menu}
            />
          ))
        }
      </thead>
    </table>
  );
}
