
export interface TabItemType {
    key: string;
    label: React.ReactNode;
}

export interface CardProps {
    children?: React.ReactNode;
    title?: string ;
    width?: string | number;
    extra?: React.ReactNode;
    tabList?: TabItemType[];
    activeTabKey?: string;
    onTabChange?: (key: string) => void;
    cover?: React.ReactNode;

}