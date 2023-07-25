export declare class CreateProductDto {
    name: string;
    description: string;
    team_id: number;
    filters: number[];
    base_price: number;
    images: string[];
    trending: boolean;
    discount?: number;
    is_active?: boolean;
}
